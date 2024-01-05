'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function UsuarioEmpresaRepository (models, Sequelize) {
  const { UsuarioEmpresa } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);

    query.where = {};

    const result = await UsuarioEmpresa.findAndCountAll(query);

    return toJSON(result);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, UsuarioEmpresa),
    findById       : (id) => Repository.findById(id, UsuarioEmpresa),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, UsuarioEmpresa, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, UsuarioEmpresa, t)
  };
};
