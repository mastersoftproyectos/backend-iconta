'use strict';
const { config } = require('../../../../common');

module.exports = function setupAuth (api, controllers, middlewares) {
  const { AuthController, EmpresaController } = controllers;

  api.post('/registro-empresa', EmpresaController.registro);

  api.post('/activar-cuenta', EmpresaController.verificacionCorreo);

  api.post('/login', AuthController.login);

  api.post('/listar-empresas', AuthController.listarEmpresas);

  api.get('/status', (req, res, next) => {
    const date = new Date();

    return res.status(200).send({
      finalizado : true,
      mensaje    : 'Funcionando correctamente',
      datos      : {
        code : Buffer.from(date.toString()).toString('base64'),
        anio : date.getFullYear(),
        mes  : date.getMonth() + 1,
        dia  : date.getDate()
      }
    });
  });

  return api;
};
