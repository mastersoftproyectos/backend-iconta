'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id            : util.pk,
    idComprobante : {
      type      : DataTypes.UUID,
      allowNull : false,
      xlabel    : lang.t('fields.idComprobante'),
      field     : 'id_comprobante'
    },
    idPlanCuenta: {
      type      : DataTypes.UUID,
      allowNull : false,
      xlabel    : lang.t('fields.idPlanCuenta'),
      field     : 'id_plan_cuenta'
    },
    glosa: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.glosa'),
      field     : 'glosa'
    },
    referencia: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.referencia'),
      field     : 'referencia'
    },
    debe: {
      type      : DataTypes.DOUBLE,
      allowNull : true,
      default   : 0,
      xlabel    : lang.t('fields.debe'),
      field     : 'debe'
    },
    haber: {
      type      : DataTypes.DOUBLE,
      allowNull : true,
      default   : 0,
      xlabel    : lang.t('fields.haber'),
      field     : 'haber'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const ComprobanteDetalle = sequelize.define('comprobante_detalle', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'contabilidad_comprobante_detalle'
  });

  return ComprobanteDetalle;
};
