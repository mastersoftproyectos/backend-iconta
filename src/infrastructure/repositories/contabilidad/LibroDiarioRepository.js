'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function LibroDiarioRepository (models, Sequelize) {
  const { LibroDiario } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);

    query.where = {};

    const result = await LibroDiario.findAndCountAll(query);

    return toJSON(result);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, LibroDiario),
    findById       : (id) => Repository.findById(id, LibroDiario),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, LibroDiario, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, LibroDiario, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, LibroDiario, t)
  };
};
