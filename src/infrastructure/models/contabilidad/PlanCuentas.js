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
    tipo: {
      type         : DataTypes.ENUM,
      values       : ['ACTIVO', 'PASIVO', 'PATRIMONIO', 'INGRESO', 'GASTO'],
      defaultValue : 'ACTIVO',
      xlabel       : lang.t('fields.tipo'),
      field        : 'tipo'
    },
    numeroCuenta: {
      type      : DataTypes.STRING(50),
      allowNull : false,
      xlabel    : lang.t('fields.numeroCuenta'),
      field     : 'numero_cuenta'
    },
    nombre: {
      type   : DataTypes.STRING(500),
      xlabel : lang.t('fields.nombre'),
      field  : 'nombre'
    },
    cuentaRegistrable: {
      type         : DataTypes.BOOLEAN,
      defaultValue : false,
      xlabel       : lang.t('fields.cuentaRegistrable'),
      field        : 'cuenta_registrable'
    },
    cuentaMonetaria: {
      type         : DataTypes.BOOLEAN,
      defaultValue : false,
      xlabel       : lang.t('fields.cuentaMonetaria'),
      field        : 'cuenta:monetaria'
    },
    numeroCuentaSIN: {
      type      : DataTypes.STRING(50),
      allowNull : true,
      xlabel    : lang.t('fields.numeroCuentaSIN'),
      field     : 'numero_cuenta_sin'
    },
    nombreCuentaSIN: {
      type      : DataTypes.STRING(500),
      allowNull : true,
      xlabel    : lang.t('fields.nombreCuentaSIN'),
      field     : 'nombre_cuenta_sin'
    },
    estado: {
      type         : DataTypes.ENUM,
      values       : ['ACTIVO', 'INACTIVO'],
      allowNull    : false,
      defaultValue : 'ACTIVO',
      xlabel       : lang.t('fields.estado'),
      field        : 'estado'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const PlanCuenta = sequelize.define('plan_cuenta', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'contabilidad_plan_cuenta'
  });

  return PlanCuenta;
};
