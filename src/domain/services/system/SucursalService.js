'use strict';

const debug = require('debug')('app:service:auth');
const { ErrorApp } = require('../../lib/error');

module.exports = function entidadService (repositories, helpers, res) {
  const { SucursalRepository } = repositories;

  async function findAll (params) {
    try {
      const sucursales = await SucursalRepository.findAll(params);

      return sucursales;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const sucursal = await SucursalRepository.findOne(params);

      return sucursal;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    try {
      const sucursal = await SucursalRepository.createOrUpdate(data);

      return sucursal;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function deleteItem (id) {
    try {
      const resultado = await SucursalRepository.deleteItem(id);

      return resultado;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    findOne,
    findAll,
    createOrUpdate,
    deleteItem
  };
};
