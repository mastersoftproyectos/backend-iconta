'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: '556f20d7-8db4-437c-9606-27ae81aff072', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_usuario: '7171272e-b31b-4c34-9220-9f535c958c5c' },
  { id: '6f7549a5-a1f2-4a8d-a2af-ad3e90a049aa', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_usuario: '86a519d2-ce79-4a35-a048-769650c9914d' },
  { id: '0c4dbf51-7363-4421-bbbe-8f290def5540', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_usuario: '70ab4cd6-2c39-4296-909d-e80c8ad56170' }
];
items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_rol_usuario', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
