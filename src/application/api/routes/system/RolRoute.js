'use strict';
module.exports = function setupSocio (api, controllers, middlewares) {
  const { RolController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/rol', AuthMiddleware.verificarPermisos(['rol:listar']), RolController.listar);

  api.get('/rol/:id', AuthMiddleware.verificarPermisos(['rol:listar']), RolController.findOne);

  api.post('/rol', AuthMiddleware.verificarPermisos(['rol:crear']), RolController.crear);

  api.put('/rol/:id', AuthMiddleware.verificarPermisos(['rol:actualizar']), RolController.actualizar);

  api.delete('/rol/:id', AuthMiddleware.verificarPermisos(['rol:eliminar']), RolController.eliminar);

  return api;
};
