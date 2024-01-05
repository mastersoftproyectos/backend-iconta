
'use strict';
const debug = require('debug')('app:controller:REPORTE');
const { Respuesta } = require('../../../lib/respuesta');
const { Finalizado, HttpCodes } = require('../../../lib/globals');
const { ID_USUARIO_ADMIN } = require('../../../../common/config/constants');
const { enviar } = require('../../../../common/lib/mail');
const uuid = require('uuid');
const { frontendUrl } = require('../../../../common/config/app');

module.exports = function setupEntidadController (services) {
  const { EmpresaService, AuthService } = services;

  async function findAll (req, res) {
    try {
      const respuesta = await EmpresaService.findAll(req.query);

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function findOne (req, res) {
    try {
      const data = { id: req.params.id };

      const respuesta = await EmpresaService.findOne(data);

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function create (req, res) {
    try {
      const data = req.body;

      data.userCreated = req.user.idUsuario;

      const respuesta = await EmpresaService.createOrUpdate(data);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function update (req, res) {
    try {
      const data = req.body;
      data.id = req.params.id;
      data._user_updated = req.user.id;

      const respuesta = await EmpresaService.createOrUpdate(data);

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function remove (req, res) {
    try {
      const { id } = req.params;

      const respuesta = await EmpresaService.deleteItem(id);

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function registro (req, res) {
    try {
      const data = req.body;

      data.userCreated = ID_USUARIO_ADMIN;

      data.codigoVerificacion = uuid.v4();

      const respuesta = await EmpresaService.registrarEmpresa(data);

      await enviar({
        para    : data.correoElectronico,
        titulo  : 'Codigo de verificacion',
        mensaje : `Su codigo de verificacion es: ${data.codigoVerificacion}`,
        html    : `<div>
          Para activar su cuenta haga click en el siguiente enlace: 
          <a href="${frontendUrl}/#/login?code=${data.codigoVerificacion}">Ir a iConta</a></div>`,
        attachments: []
      });

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function verificacionCorreo (req, res) {
    try {
      const datos = {
        codigoVerificacion : req.body.codigoVerificacion,
        userUpdated        : ID_USUARIO_ADMIN,
        request            : req
      };

      const respuesta = await AuthService.activarCuenta(datos);

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  return {
    verificacionCorreo,
    registro,
    findAll,
    findOne,
    remove,
    update,
    create
  };
};
