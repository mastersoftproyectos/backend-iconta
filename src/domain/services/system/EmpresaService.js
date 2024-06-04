'use strict';

const debug = require('debug')('app:service:auth');
const { ID_ROL_ADMIN_EMPRESA, ID_USUARIO_ADMIN, CONFIGURACION_EMPRESA_DEFECTO } = require('../../../common/config/constants');
const { ErrorApp } = require('../../lib/error');

module.exports = function empresaService (repositories, helpers, res) {
  const {
    EmpresaRepository, UsuarioRepository, AuthRepository, RolUsuarioRepository,
    SucursalRepository,
    UsuarioEmpresaRepository,
    ProyectoRepository,
    PlanCuentasRepository,
    transaction
  } = repositories;

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
      transaccion = await transaction.create();

      const existeNit = await EmpresaRepository.findOne({ nit: data.nit });

      if (existeNit) throw new Error(`Ya fue registrado el nit: ${data.nit}`);

      const empresaCreada = await EmpresaRepository.createOrUpdate(data, transaccion);

      const { rows } = await PlanCuentasRepository.findAll({ tipoRegistro: 'CONFIGURACION' });

      for (const planCuenta of rows) {
        delete planCuenta.id;

        await PlanCuentasRepository.createOrUpdate({
          ...planCuenta,
          idEmpresa    : empresaCreada.id,
          tipoRegistro : 'EJECUCION',
          userCreated  : ID_USUARIO_ADMIN
        }, transaccion);
      }

      const proyectoCreado = await ProyectoRepository.createOrUpdate({
        idEmpresa   : empresaCreada.id,
        nombre      : 'GENERAL',
        descripcion : 'Proyecto general',
        userCreated : ID_USUARIO_ADMIN
      }, transaccion);

      const nuevaConfiguracion = JSON.parse(JSON.stringify(CONFIGURACION_EMPRESA_DEFECTO));

      nuevaConfiguracion.comprobantes.idProyecto = proyectoCreado.id;

      await EmpresaRepository.createOrUpdate({ id: empresaCreada.id, configuracion: nuevaConfiguracion }, transaccion);

      const sucursalCreada = await SucursalRepository.createOrUpdate({
        idEmpresa         : empresaCreada.id,
        numeroSucursal    : 0,
        nombre            : 'CASA MATRIZ',
        descripcion       : 'CASA MATRIZ',
        correoElectronico : data.correoElectronico,
        fiscal            : true,
        estado            : 'ACTIVO',
        userCreated       : ID_USUARIO_ADMIN
      }, transaccion);

      const contrasena = await AuthRepository.codificarContrasena(data.contrasena);

      let existeUsuario = await UsuarioRepository.findOne({ usuario: data.correoElectronico });

      if (!existeUsuario) {
        existeUsuario = await UsuarioRepository.createOrUpdate({
          idEmpresa         : empresaCreada.id,
          tipoDocumento     : 'CI',
          numeroDocumento   : data.nit,
          usuario           : data.correoElectronico,
          contrasena,
          cargo             : 'GERENTE DE LA EMPRESA',
          nombres           : data.nombreComercial,
          primerApellido    : '-',
          segundoApellido   : '-',
          correoElectronico : data.correoElectronico,
          userCreated       : ID_USUARIO_ADMIN
        }, transaccion);
      }

      await UsuarioEmpresaRepository.createOrUpdate({
        idEmpresa   : empresaCreada.id,
        idSucursal  : sucursalCreada.id,
        idUsuario   : existeUsuario.id,
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
