'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { ProyectoController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/proyecto', AuthMiddleware.verificarPermisos(['proyecto:listar']), ProyectoController.findAll);

  api.get('/proyecto/:id', AuthMiddleware.verificarPermisos(['proyecto:listar']), ProyectoController.findOne);

  api.post('/proyecto', AuthMiddleware.verificarPermisos(['proyecto:crear']), ProyectoController.create);

  api.put('/proyecto/:id', AuthMiddleware.verificarPermisos(['proyecto:actualizar']), ProyectoController.update);

  api.delete('/proyecto/:id', AuthMiddleware.verificarPermisos(['proyecto:eliminar']), ProyectoController.remove);

  return api;
};
