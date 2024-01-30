'use strict';

const csvToJson = require('csvtojson');
const { bufferToStream, createObject } = require('./util');
const fs = require('fs');
const { pathFiles, publicFiles, privateFiles, backendUrl } = require('../../common/config/app');

function csv (file, headers) {
  return new Promise((resolve, reject) => {
    const items = [];
    let message = null;
    csvToJson().fromStream(bufferToStream(file))
      .on('header', header => {
        if (header.length !== headers.length) {
          message = `El número de cabeceras es incorrecto, tiene que tener ${headers.length} cabeceras: ${headers.join(', ')}.`;
        } else {
          for (const i in header) {
            if (header[i] !== headers[i]) {
              message = `La cabecera ${header[i]} no es correcta debería ser ${headers[i]}.`;
              break;
            }
          }
        }
      })
      .on('json', (item, index) => {
        items.push(createObject(headers, item));
      })
      .on('done', async (err) => {
        if (err) {
          return reject(new Error('Se produjo un error al leer el CSV'));
        }
        if (message) {
          return reject(new Error(message));
        } else {
          return resolve(items);
        }
      })
      .on('error', err => {
        return reject(err);
      });
  });
}

const mimeType = {
  png  : 'image',
  jpg  : 'image',
  jpeg : 'image',
  pdf  : 'pdf'
};

async function subirArchivoPrivado ({ archivo, subRuta = '' }) {
  const nombreArchivo = `${Date.now()}-${archivo.name}`;

  const ubicacionCompleta = `${privateFiles}/${subRuta}`;

  if (!fs.existsSync(ubicacionCompleta)) fs.mkdirSync(ubicacionCompleta);

  const pathFile = `${ubicacionCompleta}/${nombreArchivo}`;

  const tipoArchivo = nombreArchivo.split('.')[nombreArchivo.split('.').length - 1];

  await archivo.mv(pathFile);

  return {
    ubicacionCompleta : pathFile,
    ubicacionRelativa : `${subRuta}/${nombreArchivo}`,
    nombreArchivo     : nombreArchivo,
    tipoArchivo       : mimeType[tipoArchivo]
  };
}

async function subirArchivoPublico ({ archivo, subRuta = '' }) {
  const nombreArchivo = `${Date.now()}-${archivo.name}`;

  const ubicacionCompleta = `${publicFiles}/${subRuta}`;

  if (!fs.existsSync(ubicacionCompleta)) fs.mkdirSync(ubicacionCompleta);

  const pathFile = `${ubicacionCompleta}/${nombreArchivo}`;

  const tipoArchivo = nombreArchivo.split('.')[nombreArchivo.split('.').length - 1];

  await archivo.mv(pathFile);

  return {
    url               : `${backendUrl}/files/${subRuta}/${nombreArchivo}`,
    ubicacionCompleta : pathFile,
    ubicacionRelativa : `${subRuta}/${nombreArchivo}`,
    nombreArchivo     : nombreArchivo,
    tipoArchivo       : mimeType[tipoArchivo]
  };
}

module.exports = {
  csv,
  subirArchivoPrivado,
  subirArchivoPublico
};
