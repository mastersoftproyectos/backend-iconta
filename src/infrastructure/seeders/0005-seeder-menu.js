'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: 'ee1ef7b7-74bc-456e-8b98-69fee090c90c', nombre: 'Configuracion', ruta: 'configuracion', icono: 'dashboard', orden: 1, id_menu: '6190597f-7fa6-4c39-bcc9-7a1441ba566a', estado: 'ACTIVO'  },
  { id: 'fcfa9fca-69a2-4795-aaa6-60218327780c', nombre: 'Roles', ruta: 'roles', icono: 'dashboard', orden: 1, id_menu: '6190597f-7fa6-4c39-bcc9-7a1441ba566a', estado: 'ACTIVO'  },
  { id: '631d9088-38f9-4e89-b95a-72322cff4bea', nombre: 'Menus y permisos', ruta: 'menus', icono: 'business', orden: 2, id_menu: '6190597f-7fa6-4c39-bcc9-7a1441ba566a', estado: 'ACTIVO'  },
  { id: '1a797f06-46dc-4eef-ad2e-e191647cd375', nombre: 'Usuarios', ruta: 'usuarios', icono: 'group', orden: 3, id_menu: '6190597f-7fa6-4c39-bcc9-7a1441ba566a', estado: 'ACTIVO'  },
  { id: '414efdad-7e0e-4c74-afb1-0279ed449a76', nombre: 'Sucursal', ruta: 'sucursales', icono: 'menu', orden: 4, id_menu: '6190597f-7fa6-4c39-bcc9-7a1441ba566a', estado: 'ACTIVO'  },
  { id: '143b8bd8-6192-4023-a10b-6d261120dfab', nombre: 'Proyecto', ruta: 'proyectos', icono: 'people', orden: 5, id_menu: '6190597f-7fa6-4c39-bcc9-7a1441ba566a', estado: 'ACTIVO'  },
  { id: '28b003ef-4000-4733-9477-acd7059d9725', nombre: 'Interoperabilidad', ruta: 'interoperabilidad', icono: 'settings', orden: 6, id_menu: '6190597f-7fa6-4c39-bcc9-7a1441ba566a', estado: 'ACTIVO'  },

  { id: '649ee489-59f3-4d21-89e6-142960b9bb54', nombre: 'Comprobante', ruta: 'comprobantes', icono: 'settings', orden: 6, id_menu: '61d6d53b-ac65-41ac-bc54-3228f548f40a', estado: 'ACTIVO'  },
  { id: '303a4ca5-fb48-415c-9b31-b28de46cc604', nombre: 'Plantillas', ruta: 'plantillas', icono: 'settings', orden: 6, id_menu: '61d6d53b-ac65-41ac-bc54-3228f548f40a', estado: 'ACTIVO'  },

  { id: 'ddf49a43-103e-45ea-b7c4-fd7587824a50', nombre: 'Registro diario', ruta: 'registro-diario', icono: 'settings', orden: 6, id_menu: 'ef6b99d0-0834-4d1e-86b0-207111744f98', estado: 'ACTIVO'  },
  { id: '082c0dd5-189d-4861-b457-f4d0c3a925b1', nombre: 'Libro diario', ruta: 'libro-diario', icono: 'settings', orden: 6, id_menu: 'ef6b99d0-0834-4d1e-86b0-207111744f98', estado: 'ACTIVO'  },
  { id: '78a9a8b5-d52c-44bd-ad26-b52a61323328', nombre: 'Libro mayor', ruta: 'libro-mayor', icono: 'settings', orden: 6, id_menu: 'ef6b99d0-0834-4d1e-86b0-207111744f98', estado: 'ACTIVO'  },
  { id: '468f135e-f1a0-4613-8df6-b745f0bf70a6', nombre: 'Sumas y saldos', ruta: 'sumas-saldos', icono: 'settings', orden: 6, id_menu: 'ef6b99d0-0834-4d1e-86b0-207111744f98', estado: 'ACTIVO'  },

  { id: '29513490-8281-4855-8170-b520f0220d71', nombre: 'Balance general', ruta: 'balance-general', icono: 'settings', orden: 6, id_menu: '6dc27435-bb49-48c8-b98d-ed9024d10ec5', estado: 'ACTIVO'  },
  { id: 'a58df237-741b-4042-bdea-588f64982eb7', nombre: 'Estado de resultados', ruta: 'estado-resultados', icono: 'settings', orden: 6, id_menu: '6dc27435-bb49-48c8-b98d-ed9024d10ec5', estado: 'ACTIVO'  },
  { id: '83450cfc-ecd6-494a-ad4f-0f7942ac40bd', nombre: 'Evolucion de patrimonio', ruta: 'evolucion-patrimonio', icono: 'settings', orden: 6, id_menu: '6dc27435-bb49-48c8-b98d-ed9024d10ec5', estado: 'ACTIVO'  },
  { id: '52d09590-85dd-495b-ad89-4c812ab5818e', nombre: 'Flujo de efectivo', ruta: 'flujo-efectivo', icono: 'settings', orden: 6, id_menu: '6dc27435-bb49-48c8-b98d-ed9024d10ec5', estado: 'ACTIVO'  },
  { id: '263c5365-a2a8-4169-ab00-b841097b144c', nombre: 'Notas a los EEFF', ruta: 'notas-eeff', icono: 'settings', orden: 6, id_menu: '6dc27435-bb49-48c8-b98d-ed9024d10ec5', estado: 'ACTIVO'  }

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
