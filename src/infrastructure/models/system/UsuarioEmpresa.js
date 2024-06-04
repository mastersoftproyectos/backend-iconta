'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id        : util.pk,
    idUsuario : {
      type      : DataTypes.UUID,
      allowNull : true,
      xlabel    : lang.t('fields.idUsuario'),
      field     : 'id_usuario'
    },
    idEmpresa: {
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
    idRol: {
      type      : DataTypes.UUID,
      allowNull : false,
      xlabel    : lang.t('fields.idRol'),
      field     : 'id_rol'
    },
    cargo: {
      type      : DataTypes.STRING(500),
      allowNull : true,
      xlabel    : lang.t('fields.cargo'),
      field     : 'cargo'
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

  const UsuarioEmpresa = sequelize.define('usuario_empresa', fields, {
    paranoid   : true,
    timestamps : true,
    tableName  : 'sys_usuario_empresa'
  });

  return UsuarioEmpresa;
};
