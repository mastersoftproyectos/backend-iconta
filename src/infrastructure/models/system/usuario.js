'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id            : util.pk,
    tipoDocumento : {
      type   : DataTypes.STRING(15),
      xlabel : lang.t('fields.tipoDocumento'),
      field  : 'tipo_documento'
    },
    numeroDocumento: {
      type   : DataTypes.STRING(15),
      xlabel : lang.t('fields.numeroDocumento'),
      field  : 'numero_documento'
    },
    complemento: {
      type         : DataTypes.STRING(3),
      defaultValue : null,
      xlabel       : lang.t('fields.complemento'),
      field        : 'complemento'
    },
    fechaNacimiento: {
      type      : DataTypes.DATEONLY,
      allowNull : true,
      xlabel    : lang.t('fields.fechaNacimiento'),
      field     : 'fecha_nacimiento'
    },
    usuario: {
      type   : DataTypes.STRING(100),
      unique : true,
      xlabel : lang.t('fields.usuario')
    },
    contrasena: {
      type      : DataTypes.STRING(500),
      allowNull : true,
      xlabel    : lang.t('fields.contrasena')
    },
    nombres: {
      type      : DataTypes.STRING(100),
      allowNull : false,
      xlabel    : lang.t('fields.nombres'),
      field     : 'nombres'
    },
    primerApellido: {
      type      : DataTypes.STRING(100),
      allowNull : false,
      xlabel    : lang.t('fields.primerApellido'),
      field     : 'primer_apellido'
    },
    segundoApellido: {
      type   : DataTypes.STRING(100),
      xlabel : lang.t('fields.segundoApellido'),
      field  : 'segundo_apellido'
    },
    telefono: {
      type      : DataTypes.STRING(50),
      allowNull : true,
      xlabel    : lang.t('fields.telefono'),
      field     : 'telefono'
    },
    celular: {
      type      : DataTypes.STRING(50),
      allowNull : true,
      xlabel    : lang.t('fields.celular'),
      field     : 'celular'
    },
    correoElectronico: {
      type      : DataTypes.STRING(100),
      allowNull : false,
      xlabel    : lang.t('fields.correoElectronico'),
      field     : 'correo_electronico'
    },
    cargo: {
      type      : DataTypes.STRING(500),
      allowNull : true,
      xlabel    : lang.t('fields.cargo'),
      field     : 'cargo'
    },
    fotoPerfil: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.fotoPerfil'),
      field     : 'fotoPerfil'
    },
    direccion: {
      type      : DataTypes.TEXT,
      allowNull : true,
      xlabel    : lang.t('fields.direccion'),
      field     : 'direccion'
    },
    estado: {
      type         : DataTypes.ENUM,
      values       : ['ACTIVO', 'INACTIVO'],
      defaultValue : 'INACTIVO',
      allowNull    : false,
      xlabel       : lang.t('fields.estado'),
      field        : 'estado'
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  const User = sequelize.define('usuario', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'sys_usuario'
  });

  return User;
};
