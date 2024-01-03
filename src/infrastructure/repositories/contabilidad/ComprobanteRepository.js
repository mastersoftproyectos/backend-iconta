'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function ParametroRepository (models, Sequelize) {
  const { Comprobante } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);

    query.where = {};

    const result = await Comprobante.findAndCountAll(query);

    return toJSON(result);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, Comprobante),
    findById       : (id) => Repository.findById(id, Comprobante),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, Comprobante, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, Comprobante, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, Comprobante, t)
  };
};
