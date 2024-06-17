'use strict';

const { setTimestampsSeeder } = require('../lib/util');

let items = [
  {
    id          : '5c309728-b5f3-456f-8bdc-cb51253d6f53',
    id_empresa  : 'ee554d08-6dd4-4b2d-882c-3791d9dbef96',
    nombre      : 'Proyecto general',
    descripcion : 'Proyecto general',
    estado      : 'ACTIVO'
  }
];

// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_proyecto', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
        // logger.error(error)
      });
  },

  down (queryInterface, Sequelize) { }
};
