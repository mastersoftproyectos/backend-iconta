
'use strict';
const debug = require('debug')('app:controller:REPORTE');
const { Respuesta } = require('../../../lib/respuesta');
const { Finalizado, HttpCodes } = require('../../../lib/globals');
const { query } = require('express');

module.exports = function setupEntidadController (services) {
  const { ProyectoService, PermisoService } = services;

  async function findAll (req, res) {
    try {
      const tienePermiso = await PermisoService.verificarPermisos({
        roles    : [req.user.idRol],
        permisos : 'proyecto:listar:todo'
      });

      if (!tienePermiso) req.query.idEmpresa = req.user.idEmpresa;

      const respuesta = await ProyectoService.findAll(req.query);

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function findOne (req, res) {
    try {
      const data = { id: req.params.id };

      const respuesta = await ProyectoService.findOne(data);

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function create (req, res) {
    try {
      const data = req.body;

      data.idEmpresa = req.body?.idEmpresa || req.user.idEmpresa;

      data.userCreated = req.user.idUsuario;

      const respuesta = await ProyectoService.createOrUpdate(data);
      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function update (req, res) {
    try {
      const data = req.body;
      data.id = req.params.id;
      data.idEmpresa = req.body?.idEmpresa || req.user.idEmpresa;
      data.userUpdated = req.user.id;

      const respuesta = await ProyectoService.createOrUpdate(data);

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function remove (req, res) {
    try {
      const { id } = req.params;

      const respuesta = await ProyectoService.deleteItem(id);

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  return {
    findAll,
    findOne,
    remove,
    update,
    create
  };
};
