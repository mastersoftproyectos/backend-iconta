'use strict';

const debug = require('debug')('app:service:auth');
const { ErrorApp } = require('../../lib/error');

module.exports = function entidadService (repositories, helpers, res) {
  const { ComprobanteRepository, ComprobanteDetalleRepository } = repositories;

  async function findAll (params) {
    try {
      const sucursales = await ComprobanteRepository.findAll(params);

      return sucursales;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function findOne (params) {
    try {
      const sucursal = await ComprobanteRepository.findOne(params);

      return sucursal;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  async function createOrUpdate (data) {
    try {
      const sucursal = await ComprobanteRepository.createOrUpdate(data);

      if (data.asientos) {
        await ComprobanteDetalleRepository.deleteItemCond({ idComprobante: sucursal.id });

        for (const asiento of data.asientos) {
          asiento.id && delete asiento.id;

          await ComprobanteDetalleRepository.createOrUpdate({
            ...asiento,
            idComprobante : sucursal.id,
            userCreated   : data.userCreated || data.userUpdated
          });
        }
      }

      return sucursal;
    } catch (err) {
      console.log('==========_MENSAJE_A_MOSTRARSE_==========');
      console.log(err);
      console.log('==========_MENSAJE_A_MOSTRARSE_==========');
      throw new ErrorApp(err.message, 400);
    }
  }

  async function deleteItem (id) {
    try {
      const resultado = await ComprobanteRepository.deleteItem(id);

      return resultado;
    } catch (err) {
      throw new ErrorApp(err.message, 400);
    }
  }

  return {
    findOne,
    findAll,
    createOrUpdate,
    deleteItem
  };
};
