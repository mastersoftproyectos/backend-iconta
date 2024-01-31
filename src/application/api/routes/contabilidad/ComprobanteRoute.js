'use strict';

module.exports = function setupSocio (api, controllers, middlewares) {
  const { ComprobanteController } = controllers;
  const { AuthMiddleware } = middlewares;

  api.get('/comprobante', AuthMiddleware.verificarPermisos(['comprobante:listar']), ComprobanteController.findAll);

  api.get('/comprobante/:id', AuthMiddleware.verificarPermisos(['comprobante:listar']), ComprobanteController.findOne);

  api.post('/comprobante', AuthMiddleware.verificarPermisos(['comprobante:crear']), ComprobanteController.create);

  api.put('/comprobante/:id', AuthMiddleware.verificarPermisos(['comprobante:actualizar']), ComprobanteController.update);

  api.delete('/comprobante/:id', AuthMiddleware.verificarPermisos(['comprobante:eliminar']), ComprobanteController.remove);

  api.patch('/comprobante/:id/imprimir', AuthMiddleware.verificarPermisos(['comprobante:imprimir']), ComprobanteController.print);

  return api;
};
