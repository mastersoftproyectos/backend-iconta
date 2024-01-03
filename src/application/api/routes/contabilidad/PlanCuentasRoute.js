'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { PlanCuentasController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/plan-cuentas', AuthMiddleware.verificarPermisos(['planCuentas:listar']), PlanCuentasController.findAll);

  api.get('/plan-cuentas/:id', AuthMiddleware.verificarPermisos(['planCuentas:listar']), PlanCuentasController.findOne);

  api.post('/plan-cuentas', AuthMiddleware.verificarPermisos(['planCuentas:crear']), PlanCuentasController.create);

  api.put('/plan-cuentas/:id', AuthMiddleware.verificarPermisos(['planCuentas:actualizar']), PlanCuentasController.update);

  api.delete('/plan-cuentas/:id', AuthMiddleware.verificarPermisos(['planCuentas:eliminar']), PlanCuentasController.remove);

  return api;
};
