'use strict';

const { setTimestampsSeeder } = require('../lib/util');

let items = [
  { id: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_empresa: 'ee554d08-6dd4-4b2d-882c-3791d9dbef96', nombre: 'SUPER ADMIN', descripcion: 'Rol administrador del sistema.', estado: 'ACTIVO' },
  { id: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_empresa: 'ee554d08-6dd4-4b2d-882c-3791d9dbef96', nombre: 'ADMIN DE EMPRESA', descripcion: 'Rol administrador de la empresa.', estado: 'ACTIVO' },
  { id: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_empresa: 'ee5d3f27-107e-4863-9d07-6a086c8ed11a', nombre: 'CONTADOR', descripcion: 'Rol contador de la empresa.', estado: 'ACTIVO' }
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
