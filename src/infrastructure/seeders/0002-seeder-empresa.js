'use strict';

const { setTimestampsSeeder } = require('../lib/util');

let items = [
  { id: 'ee554d08-6dd4-4b2d-882c-3791d9dbef96', nit: '924864302',  nombre: 'MasterSoft', correo_electronico: 'mastersoft.proyectos@gmail.com', configuracion: null, estado: 'ACTIVO' },
  { id: 'ee5d3f27-107e-4863-9d07-6a086c8ed11a', nit: '9248643012',  nombre: 'SAMEQ', correo_electronico: 'sameq@gmail.com', configuracion: null, estado: 'ACTIVO' }
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
