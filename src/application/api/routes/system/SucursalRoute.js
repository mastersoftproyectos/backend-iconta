'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { SucursalController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/sucursal', AuthMiddleware.verificarPermisos(['sucursal:listar']), SucursalController.findAll);

  api.get('/sucursal/:id', AuthMiddleware.verificarPermisos(['sucursal:listar']), SucursalController.findOne);

  api.post('/sucursal', AuthMiddleware.verificarPermisos(['sucursal:crear']), SucursalController.create);

  api.put('/sucursal/:id', AuthMiddleware.verificarPermisos(['sucursal:actualizar']), SucursalController.update);

  api.delete('/sucursal/:id', AuthMiddleware.verificarPermisos(['sucursal:eliminar']), SucursalController.remove);

  return api;
};
