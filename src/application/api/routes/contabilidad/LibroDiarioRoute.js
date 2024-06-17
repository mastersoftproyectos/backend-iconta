'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { LibroDiarioController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/libro-diario', AuthMiddleware.verificarPermisos(['libroDiario:listar']), LibroDiarioController.findAll);

  api.get('/libro-diario/:id', AuthMiddleware.verificarPermisos(['libroDiario:listar']), LibroDiarioController.findOne);

  api.post('/libro-diario', AuthMiddleware.verificarPermisos(['libroDiario:crear']), LibroDiarioController.create);

  api.put('/libro-diario/:id', AuthMiddleware.verificarPermisos(['libroDiario:actualizar']), LibroDiarioController.update);

  api.delete('/libro-diario/:id', AuthMiddleware.verificarPermisos(['libroDiario:eliminar']), LibroDiarioController.remove);

  return api;
};
