'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function UsuarioEmpresaRepository (models, Sequelize) {
  const { UsuarioEmpresa, Empresa, rol } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);

    query.where = {};

    const result = await UsuarioEmpresa.findAndCountAll(query);

    return toJSON(result);
  }

  async function findOne (params = {}) {
    const query = {};
    query.where = params;

    query.include = [
      {
        model : Empresa,
        as    : 'empresa'
      },
      {
        model : rol,
        as    : 'rol'
      }
    ];

    const result = await UsuarioEmpresa.findOne(query);

    if (result) return result.toJSON();

    return null;
  }

  return {
    findAll,
    findOne,
    findById       : (id) => Repository.findById(id, UsuarioEmpresa),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, UsuarioEmpresa, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, UsuarioEmpresa, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, UsuarioEmpresa, t)
  };
};
