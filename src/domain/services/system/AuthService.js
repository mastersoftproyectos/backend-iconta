'use strict';

const debug = require('debug')('app:service:auth');
const { ErrorApp } = require('../../lib/error');
const url = require('url');
const { generateToken } = require('../../../application/lib/auth');

module.exports = function authService (repositories, helpers, res) {
  const {
    AuthRepository,
    UsuarioRepository,
    SuscripcionRepository,
    ParametroRepository,
    MenuRepository,
    PermisoRepository,
    EmpresaRepository,
    UsuarioEmpresaRepository,
    transaction
  } = repositories;

  async function refreshToken (idRol, idUsuario) {
    const existeUsuario = await UsuarioRepository.findById(idUsuario);
    if (!existeUsuario) {
      throw new Error('No existe el usuario.');
    }
    return getResponse(existeUsuario, idRol);
  }

  async function verificarPermisos (params) {
    try {
      const permisos = await PermisoRepository.verificarPermisos(params);
      return permisos;
    } catch (error) {
    }
  }

  async function getMenusRoles (idRoles) {
    const { rows } = await MenuRepository.findByRoles(idRoles);

    return rows;
  }

  async function getPermisos (idRoles) {
    const { rows } = await PermisoRepository.findByRoles(idRoles);

    const permisos = {};

    for (const permiso of rows) {
      permisos[permiso.nombre] = true;
    }

    return permisos;
  }

  async function getResponse (usuario, idRolSeleccionado, idEmpresaSeleccionada) {
    try {
      usuario.menu = await getMenusRoles([idRolSeleccionado]);
      usuario.permisos = await getPermisos([idRolSeleccionado]);

      usuario.token = await generateToken(ParametroRepository, {
        idRoles           : idRolSeleccionado,
        idUsuario         : usuario.id,
        idEmpresa         : idEmpresaSeleccionada,
        celular           : usuario.celular,
        correoElectronico : usuario.correoElectronico,
        usuario           : usuario.usuario
      });

      return usuario;
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  async function login (datos, request) {
    try {
      const existeUsuario = await UsuarioRepository.findOne({ id: datos.idUsuario });

      if (!existeUsuario) throw new Error('No existe el usuario.');

      delete existeUsuario.contrasena;

      const usuarioEmpresa = existeUsuario.usuarioEmpresa.find(x => x.idEmpresa === datos.idEmpresa && x.idRol === datos.idRol);

      if (!usuarioEmpresa) throw new Error('Error al recuperar datos de su rol o empresa');

      const respuesta = await getResponse(existeUsuario, usuarioEmpresa.idRol, usuarioEmpresa.idEmpresa);

      respuesta.rol = usuarioEmpresa.rol;
      respuesta.empresa = usuarioEmpresa.empresa;

      await AuthRepository.deleteItemCond({ idUsuario: existeUsuario.id });

      await AuthRepository.createOrUpdate({
        ip          : request.ipInfo.ip,
        navegador   : request.ipInfo.navigator,
        userAgent   : request.headers['user-agent'],
        token       : respuesta.token,
        idUsuario   : existeUsuario.id,
        idRol       : usuarioEmpresa.idRol,
        userCreated : existeUsuario.id
      });
      return respuesta;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function listarEmpresas (usuario, contrasena, request) {
    try {
      const existeUsuario = await UsuarioRepository.login({ usuario });

      if (!existeUsuario) throw new Error('No existe el usuario.');

      const respuestaVerificacion = await AuthRepository.verificarContrasena(contrasena, existeUsuario.contrasena);

      if (!respuestaVerificacion) throw new Error('Error en su usuario o su contraseña.');

      delete existeUsuario.contrasena;

      const respuesta = await UsuarioRepository.findOne({ usuario });

      return respuesta;
    } catch (err) {
      console.log('==========_MENSAJE_A_MOSTRARSE_==========');
      console.log(err);
      console.log('==========_MENSAJE_A_MOSTRARSE_==========');
      throw new ErrorApp(err.message, 400);
    }
  }

  async function activarCuenta ({ request, codigoVerificacion, userUpdated }) {
    let transaccion;
    try {
      transaccion = await transaction.create();

      const empresa = await EmpresaRepository.findOne({ codigoVerificacion });

      if (!empresa) throw new Error('El codigo no es correcto o ya fue usado.');

      const usuarioEmpresa = await UsuarioEmpresaRepository.findOne({ idEmpresa: empresa.id });

      const usuario = await UsuarioRepository.findOne({ id: usuarioEmpresa.idUsuario });

      if (!usuario) throw new Error('Error al intentar activar la cuenta, no se puede recuperar datos de la empresa');

      await EmpresaRepository.createOrUpdate({ id: empresa.id, codigoVerificacion: null, estado: 'ACTIVO', userUpdated }, transaccion);

      await UsuarioRepository.createOrUpdate({ id: usuario.id, estado: 'ACTIVO', userUpdated }, transaccion);

      const existeUsuario = await UsuarioRepository.findOne({ id: usuario.id });

      delete existeUsuario.contrasena;

      const respuesta = await  getResponse(existeUsuario, usuarioEmpresa.idRol, usuarioEmpresa.idEmpresa);

      respuesta.rol = usuarioEmpresa.rol;
      respuesta.empresa = usuarioEmpresa.empresa;

      await AuthRepository.deleteItemCond({ idUsuario: existeUsuario.id });

      await AuthRepository.createOrUpdate({
        ip          : request.ipInfo.ip,
        navegador   : request.ipInfo.navigator,
        userAgent   : request.headers['user-agent'],
        token       : respuesta.token,
        idUsuario   : existeUsuario.id,
        idRol       : usuarioEmpresa.idRol,
        userCreated : existeUsuario.id
      });

      await transaction.commit(transaccion);
      return respuesta;
    } catch (error) {
      await transaction.rollback(transaccion);
      throw new ErrorApp(error.message, 400);
    }
  }

  async function getSubscription (idUsuario) {
    const subscriptions = await SuscripcionRepository.findOne({ idUsuario });
    return subscriptions;
  }

  return {
    activarCuenta,
    getSubscription,
    getMenusRoles,
    verificarPermisos,
    login,
    refreshToken,
    listarEmpresas
  };
};
