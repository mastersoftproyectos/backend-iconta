'use strict';

const debug = require('debug')('app:service:auth');
const { ErrorApp } = require('../../lib/error');

module.exports = function entidadService (repositories, helpers, res) {
  const { PlanCuentasRepository } = repositories;

  async function findAll (params) {
    try {
      const sucursales = await PlanCuentasRepository.findAll(params);

      return sucursales;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const sucursal = await PlanCuentasRepository.findOne(params);

      return sucursal;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    try {
      const sucursal = await PlanCuentasRepository.createOrUpdate(data);

      return sucursal;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function deleteItem (id) {
    try {
      const resultado = await PlanCuentasRepository.deleteItem(id);

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
