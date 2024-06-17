'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 'ccbc9f21-8e26-49c9-abb2-74ac173c98e3', nombre: 'Dashboard', ruta: 'dashboard', icono: 'dashboard', orden: 1, id_menu: null, estado: 'ACTIVO'  },
  { id: '6190597f-7fa6-4c39-bcc9-7a1441ba566a', nombre: 'Administracion', ruta: '', icono: 'settings', orden: 1, id_menu: null, estado: 'ACTIVO'  },
  { id: '039a897a-76dd-44c1-b3d7-9682df8f5342', nombre: 'Plan de cuentas', ruta: 'plan-cuentas', icono: 'list', orden: 2, id_menu: null, estado: 'ACTIVO'  },
  { id: '61d6d53b-ac65-41ac-bc54-3228f548f40a', nombre: 'Comprobante', ruta: '', icono: 'receipt_long', orden: 3, id_menu: null, estado: 'ACTIVO'  },
  { id: 'ef6b99d0-0834-4d1e-86b0-207111744f98', nombre: 'Libros', ruta: '', icono: 'auto_stories', orden: 4, id_menu: null, estado: 'ACTIVO'  },
  { id: '6dc27435-bb49-48c8-b98d-ed9024d10ec5', nombre: 'Estados financieros', ruta: '', icono: 'credit_card', orden: 5, id_menu: null, estado: 'ACTIVO'  },
  { id: 'a0882ff9-0d95-4d60-835d-85624f7a3469', nombre: 'Ratios financieros', ruta: 'ratios-financieros', icono: 'settings', orden: 6, id_menu: null, estado: 'ACTIVO'  }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_menu', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },

  down (queryInterface, Sequelize) {}
};
