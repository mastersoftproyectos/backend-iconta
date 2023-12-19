'use strict';

const debug = require('debug')('app:service:auth');
const { ErrorApp } = require('../../lib/error');

module.exports = function entidadService (repositories, helpers, res) {
  const { ProyectoRepository } = repositories;

  async function findAll (params) {
    try {
      const sucursales = await ProyectoRepository.findAll(params);

      return sucursales;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const sucursal = await ProyectoRepository.findOne(params);

      return sucursal;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    try {
      const sucursal = await ProyectoRepository.createOrUpdate(data);

      return sucursal;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function deleteItem (id) {
    try {
      const resultado = await ProyectoRepository.deleteItem(id);

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
