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
    grupoConfiguracion: {
      type         : DataTypes.ENUM,
      values       : ['CONTABILIDAD', 'IMPUESTOS'],
      defaultValue : 'CONTABILIDAD',
      xlabel       : lang.t('fields.grupoConfiguracion'),
      field        : 'grupo_configuracion'
    },
    tipoConfiguracion: {
      type         : DataTypes.ENUM,
      values       : ['PLAN DE CUENTAS', 'COMPROBANTES', 'IMPRESION DE COMPROBANTES', 'TRIBUTO'],
      defaultValue : 'PLAN DE CUENTAS',
      xlabel       : lang.t('fields.tipoConfiguracion'),
      field        : 'tipo_configuracion'
    },
    valor: {
      type      : DataTypes.JSONB,
      allowNull : true
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

  const ConfiguracionEmpresa = sequelize.define('configuracion_empresa', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'sys_configuracion_empresa'
  });

  return ConfiguracionEmpresa;
};
