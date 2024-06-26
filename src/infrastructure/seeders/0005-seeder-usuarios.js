'use strict';

const { setTimestampsSeeder } = require('../lib/util');
const { saltRounds } = require('../../common/config/auth');
const bcrypt = require('bcrypt');

// Datos de producción
let items = [
  {
    id                 : '7171272e-b31b-4c34-9220-9f535c958c5c',
    numero_documento   : '9248643',
    complemento        : '',
    tipo_documento     : 'CI',
    fecha_nacimiento   : '1993-08-15',
    cargo              : 'CARGO',
    usuario            : 'admin@mastersoft.com',
    contrasena         : bcrypt.hashSync('Developer', saltRounds),
    nombres            : 'Admin',
    primer_apellido    : 'Admin',
    segundo_apellido   : 'Admin',
    correo_electronico : 'admin@yopmail.com',
    celular            : '',
    estado             : 'ACTIVO'
  },
  {
    id                 : '86a519d2-ce79-4a35-a048-769650c9914d',
    numero_documento   : '9248643',
    complemento        : '',
    tipo_documento     : 'CI',
    fecha_nacimiento   : '1993-08-15',
    cargo              : 'CARGO',
    usuario            : 'empresa@mastersoft.com',
    contrasena         : bcrypt.hashSync('Developer', saltRounds),
    nombres            : 'Admin',
    primer_apellido    : 'Admin',
    segundo_apellido   : 'Admin',
    correo_electronico : 'empresa@mastersoft.com',
    celular            : '',
    estado             : 'ACTIVO'
  },
  {
    id                 : '70ab4cd6-2c39-4296-909d-e80c8ad56170',
    numero_documento   : '9248643',
    complemento        : '',
    tipo_documento     : 'CI',
    fecha_nacimiento   : '1993-08-15',
    cargo              : 'CARGO',
    usuario            : 'empleado@mastersoft.com',
    contrasena         : bcrypt.hashSync('Developer', saltRounds),
    nombres            : 'Admin',
    primer_apellido    : 'Admin',
    segundo_apellido   : 'Admin',
    correo_electronico : 'empleado@mastersoft.comya',
    celular            : '',
    estado             : 'ACTIVO'
  }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_usuario', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
