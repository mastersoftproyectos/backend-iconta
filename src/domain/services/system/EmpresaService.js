'use strict';

const debug = require('debug')('app:service:auth');
const { ID_ROL_ADMIN_EMPRESA, ID_USUARIO_ADMIN } = require('../../../common/config/constants');
const { ErrorApp } = require('../../lib/error');

module.exports = function empresaService (repositories, helpers, res) {
  const { EmpresaRepository, UsuarioRepository, AuthRepository, RolUsuarioRepository, transaction } = repositories;

  async function findAll (params) {
    try {
      const sucursales = await EmpresaRepository.findAll(params);

      return sucursales;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const sucursal = await EmpresaRepository.findOne(params);

      return sucursal;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    try {
      if (!data.id) {
        const existeCorreoElectronico = await EmpresaRepository.findOne({ correoElectronico: data.correoElectronico });

        if (existeCorreoElectronico) throw new Error(`Ya fue registrado el correo electronico: ${data.correoElectronico}`);

        const existeNit = await EmpresaRepository.findOne({ nit: data.nit });

        if (existeNit) throw new Error(`Ya fue registrado el nit: ${data.nit}`);
      }

      const sucursal = await EmpresaRepository.createOrUpdate(data);

      return sucursal;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function registrarEmpresa (data) {
    let transaccion;
    try {
      console.log('==========_MENSAJE_A_MOSTRARSE_==========');
      console.log(data);
      console.log('==========_MENSAJE_A_MOSTRARSE_==========');

      transaccion = await transaction.create();

      const existeCorreoElectronico = await EmpresaRepository.findOne({ correoElectronico: data.correoElectronico });

      if (existeCorreoElectronico) throw new Error(`Ya fue registrado el correo electronico: ${data.correoElectronico}`);

      const existeNit = await EmpresaRepository.findOne({ nit: data.nit });

      if (existeNit) throw new Error(`Ya fue registrado el nit: ${data.nit}`);

      const empresaCreada = await EmpresaRepository.createOrUpdate(data, transaccion);

      const contrasena = await AuthRepository.codificarContrasena(data.contrasena);

      const usuarioCreado = await UsuarioRepository.createOrUpdate({
        idEmpresa         : empresaCreada.id,
        tipoDocumento     : 'CI',
        numeroDocumento   : data.nit,
        usuario           : data.correoElectronico,
        contrasena,
        cargo             : 'GERENTE DE LA EMPRESA',
        nombres           : data.nombre,
        primerApellido    : '-',
        segundoApellido   : '-',
        correoElectronico : data.correoElectronico,
        userCreated       : ID_USUARIO_ADMIN
      }, transaccion);

      await RolUsuarioRepository.createOrUpdate({
        idUsuario   : usuarioCreado.id,
        idRol       : ID_ROL_ADMIN_EMPRESA,
        userCreated : ID_USUARIO_ADMIN
      }, transaccion);

      await transaction.commit(transaccion);

      return empresaCreada;
    } catch (error) {
      console.log('==========_MENSAJE_A_MOSTRARSE_==========');
      console.log(error);
      console.log('==========_MENSAJE_A_MOSTRARSE_==========');
      await transaction.rollback(transaccion);
      throw new ErrorApp(error.message, 400);
    }
  }

  async function deleteItem (id) {
    try {
      const resultado = await EmpresaRepository.deleteItem(id);

      return resultado;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    registrarEmpresa,
    findOne,
    findAll,
    createOrUpdate,
    deleteItem
  };
};
