'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: '6e019ca9-1350-4c30-b431-6a4bf5bf8f96', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '7f5b3565-b270-4c16-b957-1b1ac3aaa04d' },
  { id: '8986c250-68b6-4870-b59b-121fc03bab7c', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: 'e73a95a7-7eb6-4b73-bea1-8bd551e71093' },
  { id: '2583d10d-14f1-4178-b878-74dd78dabda1', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '0fba0566-6db3-4e65-984d-e42a945a12d2' },
  { id: 'ba20dcaf-dda9-43f8-89bd-f87350bb2182', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '0c1289e5-1870-4135-8217-0e2ec2b75e81' },
  { id: '2ad20f38-080b-41d1-991e-cb408e921188', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '6e3f26a6-e681-4304-8fcb-2e0b6b269ce7' },
  { id: 'ca13de7d-5231-4872-a0f0-cade3bc7ae3d', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: 'f1d548ae-7a9d-4159-aace-48a00b997299' },
  { id: 'e8349cf0-4741-409d-a0c3-4250d02731ee', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '8b83d19d-563c-43a8-b073-131d0256ee9f' },
  { id: 'c0127276-3b96-4c13-9dd0-c3130b4f1e4a', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '6dbe5edc-7075-4554-8f8f-ec33081c8fe8' },
  { id: 'fd3acf01-2f67-4c0e-8ba2-436b1dd8b274', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '86f561eb-4c3c-445d-a460-bd7646323b3d' },
  { id: 'f9e7d502-fdf8-40b7-90c8-505cbadf0a5d', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '0a0d00d4-5deb-4fd9-b8bd-02f526f1a3eb' },
  { id: '6a40205c-7b1d-4202-a26f-c64d68e15e40', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '76d904bd-ee07-4732-b5df-0d9bd9efb744' },
  { id: '2602fc8e-3f44-41b1-a96d-dc52f9056e5d', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '0afc4b37-1594-44e1-98d7-c9f47dd2672c' },
  { id: '17616037-fd3d-4ee8-8bf6-d44eb040b18a', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: 'bcfed14e-2405-4e25-ac63-61e348e1c2c0' },
  { id: 'f7d5e0e7-a055-4e2a-ab29-9a93f98ea6dd', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '15ff0e86-45f5-4b84-88ff-77461bccf7bc' },
  { id: 'd6c4f26c-91d0-46ae-a669-551d44cf6ef9', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '9b764e5c-7f65-4cfc-9741-b84d47ebfeb3' },
  { id: '67957bb7-c671-4dff-aee7-8c380c49267e', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: 'fb2aca8a-6257-4ef1-a435-5ed131d702f9' },
  { id: '7aadda2d-5603-4a9a-b7a5-044d2e6c92be', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '66ffb4c4-bec3-4ad0-a1b3-f3bea8fe6201' },
  { id: 'cdb321e8-c93d-4598-9f9b-f9fc671b311d', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '66ffb4c4-bec3-4ad0-a1b3-f3bea8fe6202' },
  { id: '618077de-c0cc-4449-9c58-d5e4005132e7', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '66ffb4c4-bec3-4ad0-a1b3-f3bea8fe6203' },
  { id: '78d614ac-1d56-4623-a9b4-8e13959e52ae', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '66ffb4c4-bec3-4ad0-a1b3-f3bea8fe6204' },
  { id: '0fccdba4-4678-4794-89f9-a94e52eea4f2', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_permiso: '66ffb4c4-bec3-4ad0-a1b3-f3bea8fe6205' }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_rol_permiso', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },
  down (queryInterface, Sequelize) {}
};
