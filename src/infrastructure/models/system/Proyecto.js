'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id     : util.pk,
    nombre : {
      type      : DataTypes.STRING(500),
      allowNull : false,
      xlabel    : lang.t('fields.nombre'),
      field     : 'nombre'
    },
    descripcion: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.descripcion'),
      field     : 'descripcion'
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

  const Proyecto = sequelize.define('proyecto', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'sys_proyecto'
  });

  return Proyecto;
};
