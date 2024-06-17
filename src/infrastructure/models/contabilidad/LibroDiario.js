'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id        : util.pk,
    idEmpresa : {
      type      : DataTypes.UUID,
      allowNull : false,
      xlabel    : lang.t('fields.idEmpresa'),
      field     : 'id_empresa'
    },
    idSucursal: {
      type      : DataTypes.UUID,
      allowNull : true,
      xlabel    : lang.t('fields.idSucursal'),
      field     : 'id_sucursal'
    },
    correlativo: {
      type         : DataTypes.INTEGER,
      allowNull    : true,
      defaultValue : 0,
      xlabel       : lang.t('fields.correlativo'),
      field        : 'correlativo'
    },
    fecha: {
      type      : DataTypes.DATEONLY,
      allowNull : false,
      xlabel    : lang.t('fields.fecha'),
      field     : 'fecha'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const LibroDiario = sequelize.define('libroDiario', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'contabilidad_libro_diario'
  });

  return LibroDiario;
};
