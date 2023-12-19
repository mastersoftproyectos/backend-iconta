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
    transaction
  } = repositories;

  async function refreshToken (idRol, idUsuario) {
    const existeUsuario = await UsuarioRepository.findById(idUsuario);
    if (!existeUsuario) {
      throw new Error('No existe el usuario.');
    }
    return getResponse(existeUsuario, idRol);
  }

  async function logout (code, usuario) {
    debug('Salir del sistema');
    let resultUrl;
    const urlExit = '/statics/oauth/logout.html';
    try {
      const user = await UsuarioRepository.findOne({ usuario });
      if (user) {
        const parametros = {
          state     : code,
          idUsuario : user.id,
          estado    : 'ACTIVO'
        };
        const result = await AuthRepository.findOne(parametros);
        if (result) {
          resultUrl = getUrl(result);
        } else {
          resultUrl = urlExit;
        }
      } else {
        resultUrl = urlExit;
      }
      return res.success({ url: resultUrl });
    } catch (e) {
      return res.error(e);
    }
  }

  async function verificarPermisos (params) {
    try {
      const permisos = await PermisoRepository.verificarPermisos(params);
      return permisos;
    } catch (error) {
    }
  }

  async function getMenusRoles (roles) {
    const idRoles = roles.map(x => x.id);

    const { rows } = await MenuRepository.findByRoles(idRoles);

    return rows;
  }

  async function getPermisos (roles) {
    const idRoles = roles.map(x => x.id);
    const { rows } = await PermisoRepository.findByRoles(idRoles);
    const permisos = {};
    for (const permiso of rows) {
      permisos[permiso.nombre] = true;
    }
    return permisos;
  }

  async function getResponse (usuario) {
    try {
      usuario.menu = await getMenusRoles(usuario.roles);
      usuario.permisos = await getPermisos(usuario.roles);

      usuario.token = await generateToken(ParametroRepository, {
        idRoles           : usuario.roles.map(x => x.id),
        idUsuario         : usuario.id,
        celular           : usuario.celular,
        correoElectronico : usuario.correoElectronico,
        usuario           : usuario.usuario,
        idEntidad         : usuario.entidad?.id
      });

      return usuario;
    } catch (error) {
      throw new ErrorApp(error.message, 400);
    }
  }

  async function login (usuario, contrasena, request) {
    try {
      const existeUsuario = await UsuarioRepository.login({ usuario });

      if (!existeUsuario) throw new Error('No existe el usuario.');

      const respuestaVerificacion = await AuthRepository.verificarContrasena(contrasena, existeUsuario.contrasena);

      if (!respuestaVerificacion) throw new Error('Error en su usuario o su contraseña.');

      delete existeUsuario.contrasena;

      const respuesta = await getResponse(existeUsuario);

      await AuthRepository.deleteItemCond({ idUsuario: existeUsuario.id });

      await AuthRepository.createOrUpdate({
        ip          : request.ipInfo.ip,
        navegador   : request.ipInfo.navigator,
        userAgent   : request.headers['user-agent'],
        token       : respuesta.token,
        idUsuario   : existeUsuario.id,
        idRol       : existeUsuario.roles.map(x => x.id).join(','),
        idEntidad   : existeUsuario.entidad?.id,
        userCreated : existeUsuario.id
      });
      return respuesta;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function activarCuenta ({ request, codigoVerificacion, userUpdated }) {
    let transaccion;
    try {
      transaccion = await transaction.create();

      const empresa = await EmpresaRepository.findOne({ codigoVerificacion });

      if (!empresa) throw new Error('El codigo no es correcto o ya fue usado.');

      const usuario = await UsuarioRepository.findOne({ idEmpresa: empresa.id });

      if (!usuario) throw new Error('El registro de la empresa no se realizo de forma correct');

      await EmpresaRepository.createOrUpdate({ id: empresa.id, codigoVerificacion: null, estado: 'ACTIVO', userUpdated }, transaccion);

      await UsuarioRepository.createOrUpdate({ id: usuario.id, estado: 'ACTIVO', userUpdated }, transaccion);

      const existeUsuario = await UsuarioRepository.login({ usuario: usuario.usuario });

      delete existeUsuario.contrasena;

      const respuesta = await  getResponse(existeUsuario);

      await AuthRepository.deleteItemCond({ idUsuario: existeUsuario.id }, transaccion);

      await AuthRepository.createOrUpdate({
        ip          : request.ipInfo.ip,
        navegador   : request.ipInfo.navigator,
        userAgent   : request.headers['user-agent'],
        token       : respuesta.token,
        idUsuario   : existeUsuario.id,
        idRol       : existeUsuario.roles.map(x => x.id).join(','),
        idEntidad   : existeUsuario.entidad?.id,
        userCreated : existeUsuario.id
      }, transaccion);

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
    logout
  };
};
