'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function ParametroRepository (models, Sequelize) {
  const { Comprobante, Proyecto, Sucursal, ComprobanteDetalle, PlanCuentas } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);

    query.where = {};

    query.include = [
      {
        model : Proyecto,
        as    : 'proyecto'
      },
      {
        model : Sucursal,
        as    : 'sucursal'
      },
      {
        model : ComprobanteDetalle,
        as    : 'comprobanteDetalles'
      }
    ];

    const result = await Comprobante.findAndCountAll(query);

    return toJSON(result);
  }

  async function findOne (params = {}) {
    const query = {};
    query.where = params;

    query.include = [
      {
        model   : ComprobanteDetalle,
        as      : 'comprobanteDetalles',
        include : [
          {
            model : PlanCuentas,
            as    : 'planCuenta'
          }
        ]
      }
    ];

    const result = await Comprobante.findOne(query);

    if (!result) return null;

    return result.toJSON();
  }

  return {
    findAll,
    findOne,
    findById       : (id) => Repository.findById(id, Comprobante),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, Comprobante, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, Comprobante, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, Comprobante, t)
  };
};
