'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function ParametroRepository (models, Sequelize) {
  const { ComprobanteDetalle } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);

    query.where = {};

    const result = await ComprobanteDetalle.findAndCountAll(query);

    return toJSON(result);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, ComprobanteDetalle),
    findById       : (id) => Repository.findById(id, ComprobanteDetalle),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, ComprobanteDetalle, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, ComprobanteDetalle, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, ComprobanteDetalle, t)
  };
};
