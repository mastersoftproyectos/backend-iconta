'use strict';

const { setTimestampsSeeder } = require('../lib/util');
const { saltRounds } = require('../../common/config/auth');
const bcrypt = require('bcrypt');

// Datos de producción
let items = [
  {
    id         : '80c65365-bd82-40be-98e8-80521150a8c2',
    id_usuario : '7171272e-b31b-4c34-9220-9f535c958c5c',
    id_empresa : 'ee554d08-6dd4-4b2d-882c-3791d9dbef96',
    id_rol     : '88b0104c-1bd1-42b2-bb01-9bf0502bab5a',
    cargo      : 'SUPER ADMINISTRADOR',
    estado     : 'ACTIVO'
  },
  {
    id         : 'ab0ffdba-aabf-41d3-a989-73ce42d42310',
    id_usuario : '7171272e-b31b-4c34-9220-9f535c958c5c',
    id_empresa : 'ee554d08-6dd4-4b2d-882c-3791d9dbef96',
    id_rol     : '75ce2822-a474-4f12-83cd-9d61d5044c21',
    cargo      : 'ADMINISTRADOR',
    estado     : 'ACTIVO'
  },
  {
    id         : 'f144f651-452a-4820-ba50-133565ce7160',
    id_usuario : '7171272e-b31b-4c34-9220-9f535c958c5c',
    id_empresa : 'ee5d3f27-107e-4863-9d07-6a086c8ed11a',
    id_rol     : '885a7b95-65d4-4384-b3c9-126bc5c12567',
    cargo      : 'CONTADOR',
    estado     : 'ACTIVO'
  }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_usuario_empresa', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
