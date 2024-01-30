'use strict';

module.exports = function setupValidationRoute (api, controllers) {
  const { ArchivoController } = controllers;

  api.post('/archivo/subir-archivo-publico', ArchivoController.suirArchivoPublico);

  return api;
};
