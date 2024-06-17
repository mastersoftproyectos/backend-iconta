'use strict';

const debug = require('debug')('app:service:auth');
const { ErrorApp } = require('../../lib/error');

module.exports = function LibroDiarioService (repositories, helpers, res) {
  const { LibroDiarioRepository } = repositories;

  async function findAll (params) {
    try {
      const sucursales = await LibroDiarioRepository.findAll(params);

      return sucursales;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const sucursal = await LibroDiarioRepository.findOne(params);

      return sucursal;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    try {
      const sucursal = await LibroDiarioRepository.createOrUpdate(data);

      return sucursal;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function deleteItem (id) {
    try {
      const resultado = await LibroDiarioRepository.deleteItem(id);

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
