'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id             : util.pk,
    numeroSucursal : {
      type      : DataTypes.INTEGER,
      allowNull : false,
      xlabel    : lang.t('fields.numeroSucursal'),
      field     : 'numero_sucursal'
    },
    nombre: {
      type      : DataTypes.STRING(500),
      allowNull : true,
      xlabel    : lang.t('fields.nombre')
    },
    descripcion: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.descripcion')
    },
    direccion: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.direccion')
    },
    zona: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.zona')
    },
    ciudad: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.ciudad')
    },
    abreviatura: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.abreviatura')
    },
    pais: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.pais')
    },
    correoElectronico: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.correoElectronico'),
      field     : 'correo_electronico'
    },
    sitioWeb: {
      type      : DataTypes.STRING(100),
      allowNull : true,
      xlabel    : lang.t('fields.sitioWeb'),
      field     : 'sitio_web'
    },
    telefono: {
      type      : DataTypes.STRING(20),
      allowNull : true,
      xlabel    : lang.t('fields.telefono')
    },
    fax: {
      type      : DataTypes.STRING(20),
      allowNull : true,
      xlabel    : lang.t('fields.fax')
    },
    celular: {
      type      : DataTypes.STRING(20),
      allowNull : true,
      xlabel    : lang.t('fields.celular')
    },
    fiscal: {
      type      : DataTypes.BOOLEAN,
      allowNull : true,
      xlabel    : lang.t('fields.fiscal')
    },
    estado: {
      type         : DataTypes.ENUM,
      values       : ['ACTIVO', 'INACTIVO'],
      defaultValue : 'ACTIVO',
      xlabel       : lang.t('fields.estado'),
      field        : 'estado'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const Sucursal = sequelize.define('sucursal', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'sys_sucursal'
  });

  return Sucursal;
};
