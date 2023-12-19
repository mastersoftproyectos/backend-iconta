'use strict';

const debug = require('debug')('app:service:auth');
const { config } = require('../../../common');
const { ErrorApp } = require('../../lib/error');

module.exports = function menuService (repositories, helpers, res) {
  const { MenuRepository, PermisoRepository } = repositories;
  const { FechaHelper } = helpers;

  async function listar (params) {
    try {
      const comentarios = await MenuRepository.findAll(params);
      return comentarios;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findAllMenuPermisos (query) {
    try {
      const { rows: menus } = await MenuRepository.findAll(query);

      const { rows: permisos } = await PermisoRepository.findAll();

      const { rows: permisosRol } = await MenuRepository.permisosRol(query);

      console.log('==========_MENSAJE_A_MOSTRARSE_==========');
      console.log(permisos);
      console.log('==========_MENSAJE_A_MOSTRARSE_==========');

      menus.push({
        id     : null,
        nombre : 'Rutas sin vista',
        ruta   : null,
        icono  : 'settings',
        idMenu : null,
        orden  : 9999,
        estado : 'ACTIVO'
      });

      for (const menu of menus) {
        menu.permisos = permisos.filter(p => p.idMenu === menu.id);

        if (query.idRol) {
          for (const permiso of menu.permisos) {
            permiso.permitido = !!permisosRol.find(p => p.id === permiso.id);
          }
        }
      }

      return menus;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const comentario = await MenuRepository.findOne(params);
      if (!comentario) {
        throw new Error('El comentario no existe');
      }
      return comentario;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    debug('Crear o actualizar rol');
    let menu;
    try {
      menu = await MenuRepository.createOrUpdate(data);
      return menu;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function eliminar (params) {
    try {
      const resultado = await MenuRepository.deleteItemCond(params);
      return resultado;
    } catch (err) {
      debug(err);
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    findAllMenuPermisos,
    findOne,
    listar,
    createOrUpdate,
    eliminar
  };
};
