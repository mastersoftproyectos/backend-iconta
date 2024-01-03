'use strict';

const debug = require('debug')('app:controller:auth');
const { Respuesta } = require('../../../lib/respuesta');
const { Finalizado, HttpCodes } = require('../../../lib/globals');

module.exports = function setupAuthController (services) {
  const { AuthService } = services;

  async function login (req, res, next) {
    try {
      const respuesta = await AuthService.login(req.body, req);

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function listarEmpresas (req, res, next) {
    try {
      const { usuario, contrasena } = req.body;

      const respuesta = await AuthService.listarEmpresas(usuario, contrasena, req);

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function refreshToken (req, res) {
    try {
      const { idRol } = req.query;
      const { idUsuario } = req;
      const token = await AuthService.refreshToken(idRol, idUsuario);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, token));
    } catch (error) {
      return res.status(400).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  return {
    login,
    refreshToken,
    listarEmpresas
  };
};
