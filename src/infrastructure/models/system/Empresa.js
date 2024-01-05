'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id  : util.pk,
    nit : {
      type      : DataTypes.STRING(20),
      allowNull : false,
      unique    : true,
      xlabel    : lang.t('fields.nit'),
      field     : 'nit'
    },
    nombre: {
      type      : DataTypes.STRING(200),
      allowNull : false,
      xlabel    : lang.t('fields.nombre'),
      field     : 'nombre'
    },
    logo: {
      type      : DataTypes.STRING(500),
      allowNull : true,
      xlabel    : lang.t('fields.logo'),
      field     : 'logo'
    },
    correoElectronico: {
      type      : DataTypes.STRING(100),
      allowNull : false,
      xlabel    : lang.t('fields.correoElectronico'),
      field     : 'correo_electronico'
    },
    configuracion: {
      type      : DataTypes.JSONB,
      allowNull : true,
      xlabel    : lang.t('fields.configuracion'),
      field     : 'configuracion'
    },
    codigoVerificacion: {
      type      : DataTypes.STRING(200),
      allowNull : true,
      xlabel    : lang.t('fields.codigoVerificacion'),
      field     : 'codigo_verificacion'
    },
    estado: {
      type         : DataTypes.ENUM,
      values       : ['ACTIVO', 'INACTIVO'],
      defaultValue : 'INACTIVO',
      xlabel       : lang.t('fields.estado'),
      field        : 'estado'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const Empresa = sequelize.define('empresa', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'sys_empresa'
  });

  return Empresa;
};
