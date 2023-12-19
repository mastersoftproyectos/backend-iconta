'use strict';

const { setTimestampsSeeder } = require('../lib/util');

let items = [
  { id: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_entidad: '745034da-06cb-4d98-8fee-4c982adfbb22', nombre: 'SUPER ADMIN', descripcion: 'Rol administrador del sistema.', estado: 'ACTIVO' },
  { id: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_entidad: '745034da-06cb-4d98-8fee-4c982adfbb22', nombre: 'ADMIN DE EMPRESA', descripcion: 'Rol administrador de la empresa.', estado: 'ACTIVO' }
];

// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_rol', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
        // logger.error(error)
      });
  },

  down (queryInterface, Sequelize) { }
};
