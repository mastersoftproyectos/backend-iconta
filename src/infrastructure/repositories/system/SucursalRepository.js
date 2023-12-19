'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function ParametroRepository (models, Sequelize) {
  const { Sucursal } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);

    query.where = {};

    const result = await Sucursal.findAndCountAll(query);

    return toJSON(result);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, Sucursal),
    findById       : (id) => Repository.findById(id, Sucursal),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, Sucursal, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, Sucursal, t)
  };
};
