'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function EmpresaRepository (models, Sequelize) {
  const { Empresa } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);

    query.where = {};

    const result = await Empresa.findAndCountAll(query);

    return toJSON(result);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, Empresa),
    findById       : (id) => Repository.findById(id, Empresa),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, Empresa, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, Empresa, t)
  };
};
