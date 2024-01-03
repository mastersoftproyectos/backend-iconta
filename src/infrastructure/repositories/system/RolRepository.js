'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function rolesRepository (models, Sequelize) {
  const { rol, ruta, menu, entidad } = models;
  const Op = Sequelize.Op;

  const attributes = ['id', 'idEmpresa', 'nombre', 'descripcion', 'estado', 'createdAt'];

  async function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = attributes;
    query.where = {};

    query.include = [
      {
        attributes: [
          'id',
          'nombre',
          'ruta',
          'icono',
          'idMenu',
          'orden',
          'estado'
        ],
        through : { attributes: [] },
        model   : menu,
        as      : 'menus'
      }
    ];

    if (params.estado) {
      query.where.estado = params.estado;
    }

    if (params.nombre) {
      query.where.nombre = {
        [Op.iLike]: `%${params.nombre}%`
      };
    }

    if (params.descripcion) {
      query.where.nombre = {
        [Op.iLike]: `%${params.descripcion}%`
      };
    }

    const result = await rol.findAndCountAll(query);
    return toJSON(result);
  }

  async function findOne (params = {}) {
    const query = {
      attributes : ['id', 'idEmpresa', 'nombre', 'descripcion', 'estado'],
      where      : params
    };

    query.include = [
      {
        attributes: [
          'id',
          'nombre',
          'ruta',
          'icono',
          'idMenu',
          'orden',
          'estado'
        ],
        through : { attributes: [] },
        model   : menu,
        as      : 'menus'
      }
    ];
    const result = await rol.findOne(query);
    if (!result) {
      return null;
    }
    return result.toJSON();
  }

  return {
    findAll,
    findOne,
    findById       : id => Repository.findById(id, rol, attributes),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, rol, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, rol, t)
  };
};
