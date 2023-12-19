'use strict';
const menuSchema = require('../../schemas/system/MenuSchema');

module.exports = function setupSocio (api, controllers, middlewares) {
  const { MenuController } = controllers;
  const { AuthMiddleware, SchemaMiddleware } = middlewares;

  api.get('/menu', AuthMiddleware.verificarPermisos(['menu:listar']),  MenuController.listar);

  api.get('/menu/:id', AuthMiddleware.verificarPermisos(['menu:listar']), MenuController.mostrar);

  api.post('/menu/', AuthMiddleware.verificarPermisos(['menu:crear']), MenuController.crear);

  api.put('/menu/:id', AuthMiddleware.verificarPermisos(['menu:actualizar']), MenuController.actualizar);

  api.delete('/menu/:id', AuthMiddleware.verificarPermisos(['menu:eliminar']), MenuController.eliminar);

  api.get('/menu-permisos', AuthMiddleware.verificarPermisos(['menu:listar']), MenuController.findAllMenuPermisos);

  return api;
};
