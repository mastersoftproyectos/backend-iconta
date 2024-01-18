'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function PlanCuentasRepository (models, Sequelize) {
  const { PlanCuentas } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);

    query.where = {};

    if (params.idEmpresa) query.where.idEmpresa = params.idEmpresa;

    if (params.tipoRegistro) query.where.tipoRegistro = params.tipoRegistro;

    if (params.cuentaRegistrable) query.where.cuentaRegistrable = true;

    const result = await PlanCuentas.findAndCountAll(query);

    return toJSON(result);
  }

  return {
    findAll,
    findOne        : params => Repository.findOne(params, PlanCuentas),
    findById       : (id) => Repository.findById(id, PlanCuentas),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, PlanCuentas, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, PlanCuentas, t)
  };
};
