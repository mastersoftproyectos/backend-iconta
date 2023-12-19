'use strict';

const debug = require('debug')('app:api');
const chalk = require('chalk');
const routes = require('./routes');
const { loadControllers, loadMiddlewares } = require('../lib/util');
const path = require('path');

module.exports = async function setupApi (app, services) {
  debug('Iniciando API-REST');

  // Load controllers
  const controllers = loadControllers(path.join(__dirname, 'controllers'), services);

  const middlewares = loadMiddlewares(path.join(__dirname, 'middlewares'), services);

  // Load routes
  app.use('/api', routes(controllers, middlewares));

  app.use(function (err, req, res, nxt) {
    if (err.code === 'invalid_token') {
      res.status(403).send({
        finalizado : false,
        mensaje    : 'No autorizado',
        datos      : null
      });
    }
    if (err.code === 'permission_denied') {
      res.status(403).send({
        finalizado : false,
        mensaje    : 'No tiene permisos para realizar esta accion',
        datos      : null
      });
    }
  });

  // login Route
  console.log('🚀  ' + chalk.yellow('RUTAS: ') + chalk.redBright('AUTH'));

  return app;
};
