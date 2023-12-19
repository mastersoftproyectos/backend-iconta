'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function ParametroRepository (models, Sequelize) {
  const { Proyecto } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);

    query.where = {};

    const result = await Proyecto.findAndCountAll(query);

    return toJSON(result);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, Proyecto),
    findById       : (id) => Repository.findById(id, Proyecto),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, Proyecto, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, Proyecto, t)
  };
};
