
'use strict';
const debug = require('debug')('app:controller:REPORTE');
const { Respuesta } = require('../../../lib/respuesta');
const { Finalizado, HttpCodes } = require('../../../lib/globals');
const ejs = require('ejs');
const { pathTemplates, publicFiles } = require('../../../../common/config/app');
const puppeteer = require('puppeteer');
const fs = require('fs');
const moment = require('moment');

module.exports = function setupComprobanteController (services) {
  const { ComprobanteService, EmpresaService } = services;

  async function findAll (req, res) {
    try {
      const respuesta = await ComprobanteService.findAll(req.query);

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function findOne (req, res) {
    try {
      const data = { id: req.params.id };

      const respuesta = await ComprobanteService.findOne(data);

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function create (req, res) {
    try {
      const data = req.body;

      data.idEmpresa = req.user.idEmpresa;

      data.userCreated = req.user.idUsuario;

      const respuesta = await ComprobanteService.createOrUpdate(data);
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

      const respuesta = await ComprobanteService.createOrUpdate(data);

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function remove (req, res) {
    try {
      const { id } = req.params;

      const respuesta = await ComprobanteService.deleteItem(id);

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  async function print (req, res) {
    try {
      const data = { id: req.params.id };

      const respuesta = await ComprobanteService.findOne(data);

      const empresa = await EmpresaService.findOne({ id: req.user.idEmpresa });

      const datosPlantillaComprobante = await ejs.renderFile(`${pathTemplates}/Comprobante.ejs`, {
        ...respuesta,
        debe  : respuesta.comprobanteDetalles.filter(asiento => asiento.debe > 0),
        haber : respuesta.comprobanteDetalles.filter(asiento => asiento.haber > 0),
        ...empresa,
        fecha : moment().locale('es').format('LL')
      });

      const rutaPdf = `${publicFiles}/${req.user.idEmpresa}/Comprobante.pdf`;

      const browser = await puppeteer.launch({
        // headless          : false,
        headless          : 'new',
        args              : ['--no-sandbox'],
        slowMo            : 50,
        height            : 1080,
        width             : 1920,
        deviceScaleFactor : 2
      });

      const page = await browser.newPage();

      await page.setContent(datosPlantillaComprobante);

      await page.pdf({
        path   : rutaPdf,
        format : 'letter',
        margin : {
          top    : '1.5cm',
          left   : '.5cm',
          right  : '.5cm',
          bottom : '1.5cm'
        }
      });

      await browser.close();

      const archivoBase64 = fs.readFileSync(rutaPdf, 'base64');

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, archivoBase64));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  return {
    findAll,
    findOne,
    remove,
    update,
    create,
    print
  };
};
