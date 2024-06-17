'use strict';

const {
  setTimestampsSeeder
} = require('../lib/util');

// Datos de producción
let items = [
  { id: '6d39d9f0-41a8-4c23-9fb4-6d2aa6324acf', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: 'ccbc9f21-8e26-49c9-abb2-74ac173c98e3' },
  { id: '9d8959ec-13df-4811-8cca-1916da1445a7', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '6190597f-7fa6-4c39-bcc9-7a1441ba566a' },
  { id: '448162c6-a237-4e2b-b62b-002e64d6d061', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '039a897a-76dd-44c1-b3d7-9682df8f5342' },
  { id: 'a4c71816-765a-4752-aa67-02bf0ad99096', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '61d6d53b-ac65-41ac-bc54-3228f548f40a' },
  { id: 'c08d32e1-88ed-4d97-ac48-03a5784dd367', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: 'ef6b99d0-0834-4d1e-86b0-207111744f98' },
  { id: '8c671eee-63af-453a-84da-48b956b11beb', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '6dc27435-bb49-48c8-b98d-ed9024d10ec5' },
  { id: '4c612188-ed1a-476d-a42e-f27d3627467b', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: 'a0882ff9-0d95-4d60-835d-85624f7a3469' },
  { id: '9e04b99f-f5de-4265-b9f0-9a015c237e50', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: 'ee1ef7b7-74bc-456e-8b98-69fee090c90c' },
  { id: '718e2f61-e7b3-42d9-ba18-220c856c9b02', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: 'fcfa9fca-69a2-4795-aaa6-60218327780c' },
  { id: '7f0c3be5-89b5-4461-b93f-78d1d81abcaf', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '631d9088-38f9-4e89-b95a-72322cff4bea' },
  { id: '28a4d6ae-9396-4e8e-87ef-f6f65a15df2f', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '1a797f06-46dc-4eef-ad2e-e191647cd375' },
  { id: 'db005363-394d-41e1-8322-500618623e48', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '414efdad-7e0e-4c74-afb1-0279ed449a76' },
  { id: '2c2dc75e-e6c8-416b-97db-42645edc9f33', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '143b8bd8-6192-4023-a10b-6d261120dfab' },
  { id: '51867874-c5f6-4cad-870b-76c46ce98088', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '28b003ef-4000-4733-9477-acd7059d9725' },
  { id: '2da1a60b-4418-479b-9717-f69d1ee6a473', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '649ee489-59f3-4d21-89e6-142960b9bb54' },
  { id: '53dd4a4d-f42e-4d3a-8de7-80af477abd41', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '303a4ca5-fb48-415c-9b31-b28de46cc604' },
  { id: '3d77e460-5646-40e4-b21b-2c18db108db9', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: 'ddf49a43-103e-45ea-b7c4-fd7587824a50' },
  { id: '7223ce54-3c12-4580-adea-69ba2029a534', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '082c0dd5-189d-4861-b457-f4d0c3a925b1' },
  { id: '1e06e73d-56b0-43cd-b272-2b42f1e36c52', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '78a9a8b5-d52c-44bd-ad26-b52a61323328' },
  { id: '118b6a14-7465-4e0a-93b9-53ef7fd2a2c9', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '468f135e-f1a0-4613-8df6-b745f0bf70a6' },
  { id: '517ccc6d-5dd9-43b1-921a-459d564c7f8b', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '29513490-8281-4855-8170-b520f0220d71' },
  { id: '58f5fe28-a135-4155-ba73-3b271290817d', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: 'a58df237-741b-4042-bdea-588f64982eb7' },
  { id: '5606cc56-c403-480b-a095-0f104a727bd8', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '83450cfc-ecd6-494a-ad4f-0f7942ac40bd' },
  { id: 'abbc104d-b162-4da3-9a7d-a6d408db40d6', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '52d09590-85dd-495b-ad89-4c812ab5818e' },
  { id: '7a90fd7d-3e75-4baf-865e-04e54a0a8b6e', id_rol: '88b0104c-1bd1-42b2-bb01-9bf0502bab5a', id_menu: '263c5365-a2a8-4169-ab00-b841097b144c' },

  // MENUS PARA ADMIN DE EMPRESA
  { id: '57202487-ae6a-43bf-9c83-406dae90721e', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: 'ccbc9f21-8e26-49c9-abb2-74ac173c98e3' },
  { id: 'ab95a5d1-3a49-4ad0-979d-d4b8d721d181', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '6190597f-7fa6-4c39-bcc9-7a1441ba566a' },
  { id: '650ed9ba-b7f9-4614-bb28-f4a7b0f810a0', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '039a897a-76dd-44c1-b3d7-9682df8f5342' },
  { id: 'af51fd49-e851-463c-aa5d-9f2aceb9561e', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '61d6d53b-ac65-41ac-bc54-3228f548f40a' },
  { id: 'c0fb2a8d-7e36-4fcc-afe8-08d70f817837', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: 'ef6b99d0-0834-4d1e-86b0-207111744f98' },
  { id: 'd2d0b55b-0767-4e0e-b959-feabae75186a', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '6dc27435-bb49-48c8-b98d-ed9024d10ec5' },
  { id: 'd8c8dd13-63ba-4a3c-9023-5f2f56e553fb', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: 'a0882ff9-0d95-4d60-835d-85624f7a3469' },
  { id: 'd486cc60-d91d-440e-bd41-a26e6863dc9f', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: 'ee1ef7b7-74bc-456e-8b98-69fee090c90c' },
  { id: '552bf711-cfba-4cc7-b514-f1def907253e', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: 'fcfa9fca-69a2-4795-aaa6-60218327780c' },
  { id: 'ed79ceed-8e57-4e72-826f-f18935107d5a', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '631d9088-38f9-4e89-b95a-72322cff4bea' },
  { id: '695f1707-3d05-499b-85c3-ed11226b0438', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '1a797f06-46dc-4eef-ad2e-e191647cd375' },
  { id: 'b99dcead-3173-4ac1-ae5a-5d14e0a47dc1', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '414efdad-7e0e-4c74-afb1-0279ed449a76' },
  { id: 'ee3b3717-5148-4036-9cd6-7a16e7803309', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '143b8bd8-6192-4023-a10b-6d261120dfab' },
  { id: '72ffc746-bed6-4726-929a-804bca1e9180', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '649ee489-59f3-4d21-89e6-142960b9bb54' },
  { id: '1e34b6d7-73d1-4f4b-b99c-17ae5a5e79c1', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '303a4ca5-fb48-415c-9b31-b28de46cc604' },
  { id: '0e15b791-4fb0-46fb-8686-4709b60f913a', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: 'ddf49a43-103e-45ea-b7c4-fd7587824a50' },
  { id: '54b9a6d4-18a8-4b30-9aed-48a740607f06', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '082c0dd5-189d-4861-b457-f4d0c3a925b1' },
  { id: '63483f77-88b6-45e9-a7e4-3c97aa4fedf1', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '78a9a8b5-d52c-44bd-ad26-b52a61323328' },
  { id: 'ffa064bf-15a1-4ca9-92a8-a082e99f4d3a', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '468f135e-f1a0-4613-8df6-b745f0bf70a6' },
  { id: '0e155391-10ea-437f-9e5b-392c9c4014b1', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '29513490-8281-4855-8170-b520f0220d71' },
  { id: 'cadfab37-d591-4f08-bcc9-b3596b820417', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: 'a58df237-741b-4042-bdea-588f64982eb7' },
  { id: 'c000a79e-95a7-44ae-ad8c-ad4ebe44f4df', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '83450cfc-ecd6-494a-ad4f-0f7942ac40bd' },
  { id: 'f04f57d9-3de2-4a52-abed-cc0fb2f8a00f', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '52d09590-85dd-495b-ad89-4c812ab5818e' },
  { id: '43e5044f-e575-4f55-a23d-24a81ad53287', id_rol: '75ce2822-a474-4f12-83cd-9d61d5044c21', id_menu: '263c5365-a2a8-4169-ab00-b841097b144c' },

  // MENUS PARA EMPLEADO
  { id: 'd57c5b50-5995-410c-a7a5-719f31b5fa02', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: 'ccbc9f21-8e26-49c9-abb2-74ac173c98e3' },
  { id: 'bbab4846-0ca8-426c-829a-f14def32b1c8', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: '039a897a-76dd-44c1-b3d7-9682df8f5342' },
  { id: 'f6584e39-1264-49f6-9f06-f07525bfe19d', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: '61d6d53b-ac65-41ac-bc54-3228f548f40a' },
  { id: '76d76c69-fa65-4b32-b5c3-46377b694443', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: 'ef6b99d0-0834-4d1e-86b0-207111744f98' },
  { id: '71bf07ae-5479-4a45-995d-b566dad7a1c1', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: '6dc27435-bb49-48c8-b98d-ed9024d10ec5' },
  { id: '791cba68-6aff-4171-af00-86c2b8c135c7', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: 'a0882ff9-0d95-4d60-835d-85624f7a3469' },
  { id: '8b022b7c-14a2-450a-a72a-7cd21c4ed922', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: '649ee489-59f3-4d21-89e6-142960b9bb54' },
  { id: 'c7ae8d31-8ac3-481a-b228-02e557af5940', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: '303a4ca5-fb48-415c-9b31-b28de46cc604' },
  { id: 'ec8f2352-bdee-4dc7-987b-9505f6b86bae', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: 'ddf49a43-103e-45ea-b7c4-fd7587824a50' },
  { id: 'ef88c745-5a77-497f-b081-9af53d9edc6c', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: '082c0dd5-189d-4861-b457-f4d0c3a925b1' },
  { id: '42429626-7aa8-40b9-9901-68a9de2695b3', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: '78a9a8b5-d52c-44bd-ad26-b52a61323328' },
  { id: '3adad54c-7ca7-43fa-8903-c323edaf2c30', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: '468f135e-f1a0-4613-8df6-b745f0bf70a6' },
  { id: '5731979d-1b26-465e-87c2-45c36d8db101', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: '29513490-8281-4855-8170-b520f0220d71' },
  { id: '94c51c06-0ea9-4614-9936-727b6b6f8f39', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: 'a58df237-741b-4042-bdea-588f64982eb7' },
  { id: '0f34aff3-be5f-49de-84f7-0cfc6262e6fd', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: '83450cfc-ecd6-494a-ad4f-0f7942ac40bd' },
  { id: '128bf64c-d1ff-4df4-b8cf-7ddb490763ff', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: '52d09590-85dd-495b-ad89-4c812ab5818e' },
  { id: '97fe7978-444a-44f1-9ab4-ccd6003e3245', id_rol: '885a7b95-65d4-4384-b3c9-126bc5c12567', id_menu: '263c5365-a2a8-4169-ab00-b841097b144c' }
];

items = setTimestampsSeeder(items);

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sys_rol_menu', items, {})
      .then(async () => {})
      .catch(error => {
        if (error.message.indexOf('already exists') > -1) return;
        console.error(error);
      });
  },

  down (queryInterface, Sequelize) {}

};
