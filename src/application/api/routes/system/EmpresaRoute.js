'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { EmpresaController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/empresa', AuthMiddleware.verificarPermisos(['empresa:listar']), EmpresaController.findAll);

  api.get('/empresa/:id', AuthMiddleware.verificarPermisos(['empresa:listar']), EmpresaController.findOne);

  api.post('/empresa', AuthMiddleware.verificarPermisos(['empresa:crear']), EmpresaController.create);

  api.put('/empresa/:id', AuthMiddleware.verificarPermisos(['empresa:actualizar']), EmpresaController.update);

  api.delete('/empresa/:id', AuthMiddleware.verificarPermisos(['empresa:eliminar']), EmpresaController.remove);

  return api;
};
