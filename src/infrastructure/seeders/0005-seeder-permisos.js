'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: '7f5b3565-b270-4c16-b957-1b1ac3aaa04d', tipo: 'SISTEMA', nombre: 'usuarios:crear', id_menu: '1a797f06-46dc-4eef-ad2e-e191647cd375', descripcion: 'Permiso para crear usuarios por entidad', estado: 'ACTIVO' },
  { id: 'e73a95a7-7eb6-4b73-bea1-8bd551e71093', tipo: 'SISTEMA', nombre: 'usuarios:listar', id_menu: '1a797f06-46dc-4eef-ad2e-e191647cd375', descripcion: 'Permiso para leer usuarios por entidad', estado: 'ACTIVO' },
  { id: '0fba0566-6db3-4e65-984d-e42a945a12d2', tipo: 'SISTEMA', nombre: 'usuarios:actualizar', id_menu: '1a797f06-46dc-4eef-ad2e-e191647cd375', descripcion: 'Permiso para actualizar usuarios por entidad', estado: 'ACTIVO' },
  { id: '0c1289e5-1870-4135-8217-0e2ec2b75e81', tipo: 'SISTEMA', nombre: 'usuarios:eliminar', id_menu: '1a797f06-46dc-4eef-ad2e-e191647cd375', descripcion: 'Permiso para eliminar usuarios por entidad', estado: 'ACTIVO' },

  { id: '6e3f26a6-e681-4304-8fcb-2e0b6b269ce7', tipo: 'SISTEMA', nombre: 'menus:listar', id_menu: '631d9088-38f9-4e89-b95a-72322cff4bea', descripcion: 'Permiso para listar menus', estado: 'ACTIVO' },
  { id: 'f1d548ae-7a9d-4159-aace-48a00b997299', tipo: 'SISTEMA', nombre: 'menus:crear', id_menu: '631d9088-38f9-4e89-b95a-72322cff4bea', descripcion: 'Permiso para crear menus', estado: 'ACTIVO' },
  { id: '8b83d19d-563c-43a8-b073-131d0256ee9f', tipo: 'SISTEMA', nombre: 'menus:actualizar', id_menu: '631d9088-38f9-4e89-b95a-72322cff4bea', descripcion: 'Permiso para actualizar menus', estado: 'ACTIVO' },
  { id: '6dbe5edc-7075-4554-8f8f-ec33081c8fe8', tipo: 'SISTEMA', nombre: 'menus:eliminar', id_menu: '631d9088-38f9-4e89-b95a-72322cff4bea', descripcion: 'Permiso para eliminar menus', estado: 'ACTIVO' },

  { id: '86f561eb-4c3c-445d-a460-bd7646323b3d', tipo: 'SISTEMA', nombre: 'roles:listar', id_menu: '039a897a-76dd-44c1-b3d7-9682df8f5342', descripcion: 'Permiso para listar roles', estado: 'ACTIVO' },
  { id: '0a0d00d4-5deb-4fd9-b8bd-02f526f1a3eb', tipo: 'SISTEMA', nombre: 'roles:crear', id_menu: '039a897a-76dd-44c1-b3d7-9682df8f5342', descripcion: 'Permiso para crear roles', estado: 'ACTIVO' },
  { id: '76d904bd-ee07-4732-b5df-0d9bd9efb744', tipo: 'SISTEMA', nombre: 'roles:actualizar', id_menu: '039a897a-76dd-44c1-b3d7-9682df8f5342', descripcion: 'Permiso para actualizar roles', estado: 'ACTIVO' },
  { id: '0afc4b37-1594-44e1-98d7-c9f47dd2672c', tipo: 'SISTEMA', nombre: 'roles:eliminar', id_menu: '039a897a-76dd-44c1-b3d7-9682df8f5342', descripcion: 'Permiso para eliminar roles', estado: 'ACTIVO' },

  { id: 'bcfed14e-2405-4e25-ac63-61e348e1c2c0', tipo: 'SISTEMA', nombre: 'permisos:listar', id_menu: '631d9088-38f9-4e89-b95a-72322cff4bea', descripcion: 'Permiso para listar permisos', estado: 'ACTIVO' },
  { id: '15ff0e86-45f5-4b84-88ff-77461bccf7bc', tipo: 'SISTEMA', nombre: 'permisos:crear', id_menu: '631d9088-38f9-4e89-b95a-72322cff4bea', descripcion: 'Permiso para crear permisos', estado: 'ACTIVO' },
  { id: '9b764e5c-7f65-4cfc-9741-b84d47ebfeb3', tipo: 'SISTEMA', nombre: 'permisos:actualizar', id_menu: '631d9088-38f9-4e89-b95a-72322cff4bea', descripcion: 'Permiso para actualizar permisos', estado: 'ACTIVO' },
  { id: 'fb2aca8a-6257-4ef1-a435-5ed131d702f9', tipo: 'SISTEMA', nombre: 'permisos:eliminar', id_menu: '631d9088-38f9-4e89-b95a-72322cff4bea', descripcion: 'Permiso para eliminar permisos', estado: 'ACTIVO' },

  { id: '66ffb4c4-bec3-4ad0-a1b3-f3bea8fe6201', tipo: 'INTEROPERABILIDAD', nombre: 'usuarios:listar', id_menu: '28b003ef-4000-4733-9477-acd7059d9725', descripcion: 'Permiso para Listar usuarios de forma externa', estado: 'ACTIVO' },
  { id: '66ffb4c4-bec3-4ad0-a1b3-f3bea8fe6202', tipo: 'INTEROPERABILIDAD', nombre: 'usuarios:crear', id_menu: '28b003ef-4000-4733-9477-acd7059d9725', descripcion: 'Permiso para crear un usuario', estado: 'ACTIVO' },
  { id: '66ffb4c4-bec3-4ad0-a1b3-f3bea8fe6203', tipo: 'INTEROPERABILIDAD', nombre: 'usuarios:actualizar', id_menu: '28b003ef-4000-4733-9477-acd7059d9725', descripcion: 'Permiso para eliminar actualizar un usuario', estado: 'ACTIVO' },
  { id: '66ffb4c4-bec3-4ad0-a1b3-f3bea8fe6204', tipo: 'INTEROPERABILIDAD', nombre: 'usuarios:eliminar', id_menu: '28b003ef-4000-4733-9477-acd7059d9725', descripcion: 'Permiso para eliminar un usuario', estado: 'ACTIVO' },
  { id: '66ffb4c4-bec3-4ad0-a1b3-f3bea8fe6205', tipo: 'INTEROPERABILIDAD', nombre: 'usuarios:cambiarEstado', id_menu: '28b003ef-4000-4733-9477-acd7059d9725', descripcion: 'Permiso para cambiar el estado de un usuario.', estado: 'ACTIVO' }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_permiso', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },

  down (queryInterface, Sequelize) {}
};
