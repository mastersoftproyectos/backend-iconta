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
    nombrePlantilla: {
      type   : DataTypes.STRING(200),
      xlabel : lang.t('fields.nombrePlantilla'),
      field  : 'nombre_plantilla'
    },
    descripcion: {
      type   : DataTypes.TEXT,
      xlabel : lang.t('fields.nombre'),
      field  : 'nombre'
    },
    idSucursal: {
      type      : DataTypes.UUID,
      allowNull : false,
      xlabel    : lang.t('fields.idSucursal'),
      field     : 'id_sucursal'
    },
    idProyecto: {
      type      : DataTypes.UUID,
      allowNull : false,
      xlabel    : lang.t('fields.idProyecto'),
      field     : 'id_proyecto'
    },
    tipo: {
      type         : DataTypes.ENUM,
      values       : ['INGRESO', 'EGRESO', 'TRASPASO'],
      allowNull    : false,
      defaultValue : 'INGRESO',
      xlabel       : lang.t('fields.tipo'),
      field        : 'tipo'
    },
    fecha: {
      type      : DataTypes.DATEONLY,
      allowNull : false,
      xlabel    : lang.t('fields.fecha'),
      field     : 'fecha'
    },
    numeroComprobante: {
      type      : DataTypes.STRING(50),
      allowNull : true,
      xlabel    : lang.t('fields.numeroComprobante'),
      field     : 'numero_comprobante'
    },
    tasaCambio: {
      type      : DataTypes.STRING(50),
      allowNull : true,
      xlabel    : lang.t('fields.tasaCambio'),
      field     : 'tasa_cambio'
    },
    numeroDocumento: {
      type      : DataTypes.STRING(100),
      allowNull : false,
      xlabel    : lang.t('fields.numeroDocumento'),
      field     : 'numero_documento'
    },
    nombre: {
      type      : DataTypes.STRING(500),
      allowNull : false,
      xlabel    : lang.t('fields.nombre'),
      field     : 'nombre'
    },
    glosa: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.glosa'),
      field     : 'glosa'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const PlantillaComprobante = sequelize.define('PlantillaComprobante', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'contabilidad_plantilla_comprobante'
  });

  return PlantillaComprobante;
};
