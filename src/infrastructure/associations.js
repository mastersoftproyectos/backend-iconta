'use strict';

// Definiendo asociaciones de las tablas
module.exports = function associations (models) {
  const {
    rol,
    auth,
    usuario,
    permiso,
    entidad,
    rolPermiso,
    rolUsuario,
    rolMenu,
    menu,
    aplicacion,
    aplicacionPermiso,
    // CONTRATOS
    Solicitud,
    Adjunto,
    Asignacion,
    Parrafo,
    Certificacion,
    UsuarioEmpresa,
    Empresa,
    Comprobante,
    ComprobanteDetalle,
    PlanCuentas,
    Proyecto,
    Sucursal
  } = models;

  auth.belongsTo(usuario, { foreignKey: { name: 'idUsuario' }, as: 'usuario' });
  usuario.hasMany(auth,  { foreignKey: { name: 'idUsuario' }, as: 'sesiones' });

  rol.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(rol,  { foreignKey: { name: 'idEntidad' }, as: 'roles' });

  aplicacion.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(aplicacion,  { foreignKey: { name: 'idEntidad' }, as: 'aplicaciones' });

  entidad.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidadPadre' });
  entidad.hasMany(entidad,  { foreignKey: { name: 'idEntidad' }, as: 'entidades' });

  usuario.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidad' });
  entidad.hasMany(usuario,  { foreignKey: { name: 'idEntidad' }, as: 'usuarios' });

  permiso.belongsTo(menu, { foreignKey: { name: 'idMenu' }, as: 'menu' });
  menu.hasMany(permiso,  { foreignKey: { name: 'idMenu' }, as: 'permisos' });

  menu.belongsTo(menu, { foreignKey: { name: 'idMenu' }, as: 'menuSuperior' });
  menu.hasMany(menu, { foreignKey: { name: 'idMenu' }, as: 'subMenus' });

  rol.belongsToMany(menu, { through: { model: rolMenu, unique: false }, as: 'menus', foreignKey: 'idRol' });
  menu.belongsToMany(rol, { through: { model: rolMenu, unique: false }, as: 'roles', foreignKey: 'idMenu' });

  rol.belongsToMany(permiso, { through: { model: rolPermiso, unique: false }, as: 'permisos', foreignKey: 'idRol' });
  permiso.belongsToMany(rol, { through: { model: rolPermiso, unique: false }, as: 'roles', foreignKey: 'idPermiso' });

  aplicacion.belongsToMany(permiso, { through: { model: aplicacionPermiso, unique: false }, as: 'permisos', foreignKey: 'idAplicacion' });
  permiso.belongsToMany(aplicacion, { through: { model: aplicacionPermiso, unique: false }, as: 'aplicaciones', foreignKey: 'idPermiso' });

  // Roles de usuario
  usuario.belongsToMany(rol,  { through: { model: rolUsuario, unique: false }, as: 'roles', foreignKey: 'idUsuario' });
  rol.belongsToMany(usuario, { through: { model: rolUsuario, unique: false }, as: 'usuarios', foreignKey: 'idRol' });

  auth.belongsTo(usuario, { foreignKey: { name: 'idUsuario' }, as: 'usuarioSesion' });
  usuario.hasMany(auth,  { foreignKey: { name: 'idUsuario' }, as: 'sesionesUsuario' });

  auth.belongsTo(entidad, { foreignKey: { name: 'idEntidad' }, as: 'entidadSesion' });
  entidad.hasMany(auth,  { foreignKey: { name: 'idEntidad' }, as: 'sesionesEntidad' });

  // CONTRATOS
  Parrafo.belongsTo(Solicitud, { foreignKey: { name: 'idSolicitud' }, as: 'solicitud' });
  Solicitud.hasMany(Parrafo,  { foreignKey: { name: 'idSolicitud' }, as: 'parrafos' });

  Adjunto.belongsTo(Solicitud, { foreignKey: { name: 'idSolicitud' }, as: 'solicitud' });
  Solicitud.hasMany(Adjunto,  { foreignKey: { name: 'idSolicitud' }, as: 'adjuntos' });

  Certificacion.belongsTo(Solicitud, { foreignKey: { name: 'idSolicitud' }, as: 'solicitud' });
  Solicitud.hasOne(Certificacion,  { foreignKey: { name: 'idSolicitud' }, as: 'certificacion' });

  usuario.belongsToMany(Solicitud,  { through: { model: Asignacion, unique: false }, as: 'solicitudes', foreignKey: 'idUsuario' });
  Solicitud.belongsToMany(usuario, { through: { model: Asignacion, unique: false }, as: 'usuarios', foreignKey: 'idSolicitud' });

  UsuarioEmpresa.belongsTo(usuario,  { foreignKey: 'idUsuario', as: 'usuario' });
  usuario.hasMany(UsuarioEmpresa, { foreignKey: 'idUsuario', as: 'usuarioEmpresa' });

  UsuarioEmpresa.belongsTo(rol,  { foreignKey: 'idRol', as: 'rol' });
  rol.hasMany(UsuarioEmpresa, { foreignKey: 'idRol', as: 'rolEmpresa' });

  UsuarioEmpresa.belongsTo(Empresa,  { foreignKey: 'idEmpresa', as: 'empresa' });
  Empresa.hasMany(UsuarioEmpresa, { foreignKey: 'idEmpresa', as: 'empresaEmpresa' });

  UsuarioEmpresa.belongsTo(Sucursal,  { foreignKey: 'idSucursal', as: 'sucursal' });
  Sucursal.hasMany(UsuarioEmpresa, { foreignKey: 'idSucursal', as: 'sucursalEmpresa' });

  ComprobanteDetalle.belongsTo(Comprobante,  { foreignKey: 'idComprobante', as: 'comprobante' });
  Comprobante.hasMany(ComprobanteDetalle, { foreignKey: 'idComprobante', as: 'comprobanteDetalles' });

  ComprobanteDetalle.belongsTo(PlanCuentas,  { foreignKey: 'idPlanCuenta', as: 'planCuenta' });
  PlanCuentas.hasMany(ComprobanteDetalle, { foreignKey: 'idPlanCuenta', as: 'comprobanteDetalles' });

  Comprobante.belongsTo(Proyecto,  { foreignKey: 'idProyecto', as: 'proyecto' });
  Proyecto.hasMany(Comprobante, { foreignKey: 'idProyecto', as: 'comprobantes' });

  Comprobante.belongsTo(Sucursal,  { foreignKey: 'idSucursal', as: 'sucursal' });
  Sucursal.hasMany(Comprobante, { foreignKey: 'idSucursal', as: 'comprobantes' });

  Sucursal.belongsTo(Empresa,  { foreignKey: 'idEmpresa', as: 'empresa' });
  Empresa.hasMany(Sucursal, { foreignKey: 'idEmpresa', as: 'sucursales' });

  return models;
};
