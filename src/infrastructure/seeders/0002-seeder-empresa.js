'use strict';

const { CONFIGURACION_EMPRESA_DEFECTO } = require('../../common/config/constants');
const { setTimestampsSeeder } = require('../lib/util');

let items = [
  { id: 'ee554d08-6dd4-4b2d-882c-3791d9dbef96', nit: '924864302',  nombre_comercial: 'MasterSoft', configuracion: JSON.stringify(CONFIGURACION_EMPRESA_DEFECTO), correo_electronico: 'mastersoft.proyectos@gmail.com', estado: 'ACTIVO' },
  { id: 'ee5d3f27-107e-4863-9d07-6a086c8ed11a', nit: '9248643012',  nombre_comercial: 'SAMEQ', configuracion: JSON.stringify(CONFIGURACION_EMPRESA_DEFECTO), correo_electronico: 'sameq@gmail.com', estado: 'ACTIVO' }
];

// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_empresa', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
        // logger.error(error)
      });
  },

  down (queryInterface, Sequelize) { }
};
