'use strict';

const { Respuesta } = require('../../../lib/respuesta');
const { Finalizado, HttpCodes } = require('../../../lib/globals');
const { subirArchivoPublico } = require('../../../lib/upload');

module.exports = function setupAuthController (services) {
  async function suirArchivoPublico (req, res) {
    try {
      let respuesta = null;

      for (const key in req.files) {
        const archivo = req.files[key];

        const { url } = await subirArchivoPublico({ archivo, subRuta: req.user?.idEmpresa });

        respuesta = url;
      }

      return res.status(200).send(new Respuesta('OK', Finalizado.OK, respuesta));
    } catch (error) {
      return res.status(error.httpCode || HttpCodes.userError).json(new Respuesta(error.message, Finalizado.FAIL));
    }
  }

  return {
    suirArchivoPublico
  };
};
