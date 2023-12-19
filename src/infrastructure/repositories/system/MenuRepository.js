'use strict';

const { getQuery, toJSON } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function menusRepository (models, Sequelize) {
  const { menu, rol, permiso } = models;
  const Op = Sequelize.Op;

  async function findAll (params = {}) {
    const query = getQuery(params);
    query.attributes = [
      'id',
      'nombre',
      'ruta',
      'icono',
      'idMenu',
      'orden',
      'estado'
    ];

    query.where = {};
    query.include = [
      {
        model : menu,
        as    : 'menuSuperior'
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

    const result = await menu.findAndCountAll(query);

    return toJSON(result);
  }

  async function permisosMenu (params = {}) {
    const query = getQuery(params);

    query.where = {};

    query.include = [
      {
        required   : false,
        attributes : [
          'id',
          'idMenu',
          'nombre',
          'descripcion',
          [Sequelize.literal('(SELECT FALSE)'), 'permitido']
        ],
        model : permiso,
        as    : 'permisos'
      }
    ];

    if (params.tipoPermiso) {
      query.include[0].where = { tipo: params.tipoPermiso };
    }

    const result = await menu.findAndCountAll(query);

    return toJSON(result);
  }

  async function permisosRol (params = {}) {
    const query = getQuery(params);

    query.where = {};

    query.include = [
      {
        through : { attributes: [] },
        model   : rol,
        as      : 'roles'
      }
    ];

    if (params.tipoPermiso) query.where = { tipo: params.tipoPermiso };

    if (params.idRol) query.include[0].where = { id: params.idRol };

    const result = await permiso.findAndCountAll(query);

    return toJSON(result);
  }

  function findOne (params = {}) {
    const query = {};
    query.where = params;
    query.include = [];
    return menu.findOne(query);
  }

  async function findByRoles (roles) {
    const query = {};
    query.where = {
      estado : 'ACTIVO',
      idMenu : null
    };

    query.attributes = [
      'id',
      'nombre',
      'ruta',
      'icono',
      'idMenu',
      'orden',
      'estado'
    ];

    query.order = [['orden', 'ASC']];

    query.include = [
      {
        model   : menu,
        as      : 'subMenus',
        include : [
          {
            through    : { attributes: [] },
            attributes : [],
            model      : rol,
            as         : 'roles',
            where      : {
              id: { [Op.in]: roles }
            }
          }
        ]
      },
      {
        required   : true,
        through    : { attributes: [] },
        attributes : [],
        model      : rol,
        as         : 'roles',
        where      : {
          id: { [Op.in]: roles }
        }
      }
    ];

    const result = await menu.findAndCountAll(query);

    return toJSON(result);
  }

  return {
    permisosMenu,
    permisosRol,
    findAll,
    findByRoles,
    findOne,
    findById       : (id) => Repository.findById(id, menu),
    createOrUpdate : (item, t) => Repository.createOrUpdate(item, menu, t),
    deleteItem     : (id, t) => Repository.deleteItem(id, menu, t),
    deleteItemCond : (params, t) => Repository.deleteItemCond(params, menu, t)
  };
};
