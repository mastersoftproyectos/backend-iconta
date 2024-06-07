'use strict';

const { setTimestampsSeeder } = require('../lib/util');

const { empresas }  = require('./0002-seeder-empresa');
const uuid = require('uuid');

let items = [
  {

    id_empresa          : null,
    numero_cuenta       : '1',
    nombre              : 'ACTIVO',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '11',
    nombre              : 'ACTIVO CORRIENTE',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '1101',
    nombre              : 'DISPONIBLE',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '11',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110101',
    nombre              : 'CAJA',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110101001',
    nombre              : 'CAJA M/N',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110101',
    cuenta_registrable  : true,
    cuenta_monetaria    : true,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110101002',
    nombre              : 'CAJA M/E',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110101',
    cuenta_registrable  : true,
    cuenta_monetaria    : true,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110101003',
    nombre              : 'CAJA CHICA',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110101',
    cuenta_registrable  : true,
    cuenta_monetaria    : true,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110102',
    nombre              : 'BANCOS MONEDA NACIONAL',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110102001',
    nombre              : 'BANCO NACIONAL DE BOLIVIA - BNB M/N',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110102',
    cuenta_registrable  : true,
    cuenta_monetaria    : true,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110103',
    nombre              : 'BANCOS MONEDA EXTRANJERA',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110103001',
    nombre              : 'BANCO NACIONAL DE BOLIVIA - BNB M/E',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110103',
    cuenta_registrable  : true,
    cuenta_monetaria    : true,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '1102',
    nombre              : 'EXIGIBLE',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '11',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110201',
    nombre              : 'CUENTAS POR COBRAR M/N',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110201001',
    nombre              : 'CUENTAS POR COBRAR M/N',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110201',
    cuenta_registrable  : true,
    cuenta_monetaria    : true,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110201002',
    nombre              : 'LETRAS POR COBRAR',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110202',
    nombre              : 'CUENTAS POR COBRAR M/E',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110202001',
    nombre              : 'CUENTAS POR COBRAR M/E',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110202',
    cuenta_registrable  : true,
    cuenta_monetaria    : true,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110203',
    nombre              : 'CLIENTES POR COBRAR M/N',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110203001',
    nombre              : 'CLIENTES POR COBRAR M/N',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110203',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110203002',
    nombre              : 'EJECUCION DE PRESUPUESTOS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110203',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110204',
    nombre              : 'CLIENTES POR COBRAR M/E',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110204001',
    nombre              : 'CLIENTES POR COBRAR M/E',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110205',
    nombre              : 'ENTREGA FONDOS A RENDIR',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110205001',
    nombre              : 'ENTREGA FONDOS A RENDIR',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110205',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110206',
    nombre              : 'ANTICIPOS AL PERSONAL',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110206001',
    nombre              : 'ANTICIPO AL PERSONAL',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110206',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110206002',
    nombre              : 'ALQUILERES PAGADOS POR ADELANTADO',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110206',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110206003',
    nombre              : 'ANTICIPO A PROVEEDORES',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110206',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110207',
    nombre              : 'ANTICIPOS A CUENTA UTILIDADES SOCIOS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110208',
    nombre              : 'PRESTAMOS A SOCIOS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110209',
    nombre              : 'PRESTAMOS AL PERSONAL',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110209001',
    nombre              : 'PRESTAMOS AL PERSONAL',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110209',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110210',
    nombre              : 'PRESTAMOS VARIOS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110211',
    nombre              : 'IMPUESTO IVA CREDITO FISCAL',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110211001',
    nombre              : 'CREDITO FISCAL IVA',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110211',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110211002',
    nombre              : 'CREDITO FISCAL IVA DIFERIDO',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110211',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110212',
    nombre              : 'IMPUESTO A LAS UTILIDADES',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110212001',
    nombre              : 'I.U.E. POR COMPENSAR',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110212',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '1103',
    nombre              : 'INVENTARIOS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '11',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110301',
    nombre              : 'INVENTARIO DE MERCADERIAS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1103',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110301001',
    nombre              : 'INVENTARIO DE MERCADERIAS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110301',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '1104',
    nombre              : 'MERCADERIA EN TRANSITO',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '11',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110401',
    nombre              : 'MERCADERIA EN TRANSITO',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1104',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '110401001',
    nombre              : 'MERCADERIA EN TRANSITO',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '110401',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '12',
    nombre              : 'ACTIVO NO CORRIENTE',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '1201',
    nombre              : 'INVERSIONES',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '12',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120101',
    nombre              : 'INVERSIONES',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1201',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120101001',
    nombre              : 'ACCIONES COTEL',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120101',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120101002',
    nombre              : 'ACTIVOS INTANGIBLES',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120101',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '1202',
    nombre              : 'ACTIVO FIJO',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '12',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120201',
    nombre              : 'TERRENOS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1202',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120201001',
    nombre              : 'TERRENOS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120202',
    nombre              : 'EDIFICIOS Y CONSTRUCCIONES',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1202',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120202001',
    nombre              : 'EDIFICIOS Y CONSTRUCCIONES',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120202',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120203',
    nombre              : 'DEP. ACUM. EDIFICIOS Y CONTRUCCIONES',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1202',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120203001',
    nombre              : 'DEP. ACUM. EDIFICIOS Y CONSTRUCCIONES',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120203',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120204',
    nombre              : 'MUEBLES Y ENSERES',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1202',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120204001',
    nombre              : 'MUEBLES Y ENSERES',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120205',
    nombre              : 'DEP. ACUM. MUEBLES Y ENSERES',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1202',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120205001',
    nombre              : 'DEP. ACUM. MUEBLES Y ENSERES',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120205',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120206',
    nombre              : 'MAQUINARIA Y EQUIPO',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1202',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120206001',
    nombre              : 'MAQUINARIA, EQUIPO E INSTALACIONES',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120206',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120207',
    nombre              : 'DEP.ACUM. MAQUINARIA Y EQUIPO',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1202',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120207001',
    nombre              : 'DEP. ACUM. MAQUINARIA, EQUIPO E INSTALACIONES',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120207',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120208',
    nombre              : 'VEHICULOS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1202',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120208001',
    nombre              : 'VEHICULOS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120208',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120209',
    nombre              : 'DEP. ACUM. VEHICULOS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1202',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120209001',
    nombre              : 'DEP. ACUM. VEHICULOS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120209',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120210',
    nombre              : 'HERRAMIENTAS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1202',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120210001',
    nombre              : 'HERREMIENTAS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120210',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120211',
    nombre              : 'DEP. ACUM. HERRAMIENTAS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1202',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120211001',
    nombre              : 'DEP. ACUM. HERREMIENTAS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120211',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120212',
    nombre              : 'EQUIPOS DE COMPUTACION',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1202',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120212001',
    nombre              : 'EQUIPOS DE COMPUTACION',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120212',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120213',
    nombre              : 'DEP. ACUM. EQUIPOS DE COMPUTACION',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1202',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120213001',
    nombre              : 'DEP. ACUM. EQUIPOS DE COMPUTACION',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120213',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '1203',
    nombre              : 'ACTIVO DIFERIDO',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '12',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120301',
    nombre              : 'GASTOS PAGADOS POR ADELANTADO',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1203',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120301001',
    nombre              : 'GASTOS PAGADOS POR ADELANTADO',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120301',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120302',
    nombre              : 'GASTOS DE ORGANIZACION',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1203',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120302001',
    nombre              : 'ORGANIZACION Y CONSTITUCION',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120302',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120303',
    nombre              : 'AMORT. ACUM. ORGANIZACION Y CONSTITUCION',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1203',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120303001',
    nombre              : 'AMORT. ACUM. ORGANIZACION Y CONSTITUCION',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120303',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '1204',
    nombre              : 'OTROS ACTIVOS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '12',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120401',
    nombre              : 'OTROS ACTIVOS',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '1204',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '120401001',
    nombre              : 'DEPOSITOS EN GARANTIA',
    tipo                : 'ACTIVO',
    numero_cuenta_padre : '120401',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '2',
    nombre              : 'PASIVO',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '21',
    nombre              : 'PASIVO CORRIENTE',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '2101',
    nombre              : 'PASIVO EXIGIBLE',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '21',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210101',
    nombre              : 'CUENTAS POR PAGAR M/N',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210101001',
    nombre              : 'CUENTAS POR PAGAR M/N',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210101',
    cuenta_registrable  : true,
    cuenta_monetaria    : true,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210102',
    nombre              : 'CUENTAS POR PAGAR M/E',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210102001',
    nombre              : 'CUENTAS POR PAGAR M/E',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210102',
    cuenta_registrable  : true,
    cuenta_monetaria    : true,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210103',
    nombre              : 'PROVEEDORES EXTERIOR POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210104',
    nombre              : 'PROVEEDORES LOCALES POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210105',
    nombre              : 'SUELDOS Y SALARIOS POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210105001',
    nombre              : 'SUELDOS Y SALARIOS POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210105',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210106',
    nombre              : 'AGUINALDOS POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210106001',
    nombre              : 'AGUINALDOS POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210106',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210107',
    nombre              : 'BENEFICIOS SOCIALES Y OTROS POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210107001',
    nombre              : 'BENEFICIOS SOCIALES Y OTROS POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210107',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210108',
    nombre              : 'HONORARIOS PROFESIONALES POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210108001',
    nombre              : 'HONORARIOS PROFESIONALES POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210108',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210109',
    nombre              : 'IMPUESTO IVA DEBITO FISCAL',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210109001',
    nombre              : 'DEBITO FISCAL IVA',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210109',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210109002',
    nombre              : 'IVA POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210109',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210110',
    nombre              : 'IMPUESTO A LAS UTILIDADES',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210110001',
    nombre              : 'I.U.E. POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210110',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210111',
    nombre              : 'IMPUESTOS Y PATENTES POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210111001',
    nombre              : 'IT POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210111',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210111002',
    nombre              : 'IMPUESTO REGIMEN COMPLEMENTARIO RC-IVA',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210111',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210111003',
    nombre              : 'I.U.E. RETENCIONES POR PAGAR (SERVICIOS)',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210111',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210111004',
    nombre              : 'I.T. RETENCIONES POR PAGAR (SERVICIOS)',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210111',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210111005',
    nombre              : 'I.U.E. RETENCIONES POR PAGAR (COMPRAS)',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210111',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210111006',
    nombre              : 'I.T. RETENCIONES POR PAGAR (COMPRAS)',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210111',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210111007',
    nombre              : 'IMPUESTO SOBRE INMUEBLES POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210111',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210111008',
    nombre              : 'PATENTES MUNICIPALES POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210111',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210112',
    nombre              : 'CARGAS SOCIALES POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210112001',
    nombre              : 'CAJA DE SALUD CORDES',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210112',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210112002',
    nombre              : 'AFP FUTURO DE BOLIVIA',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210112',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210112003',
    nombre              : 'AFP BBV PREVISION',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210112',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210112004',
    nombre              : 'DEBITO FISCAL IVA DIFERIDO',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210112',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210112005',
    nombre              : 'OTRAS CARGAS SOCIALES POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210112',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '210112006',
    nombre              : 'APORTE PATRONAL AFPS POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '210112',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '22',
    nombre              : 'PASIVO NO CORRIENTES',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '2201',
    nombre              : 'PASIVO EXIGIBLE A LARGO PLAZO',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '22',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '220101',
    nombre              : 'OBLIGACIONES FINANCIERAS',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2201',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '220101001',
    nombre              : 'SERVICIOS BASICOS POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '220101',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '220101002',
    nombre              : 'PRESTAMOS DOCUMENTARIOS',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '220101',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '220101003',
    nombre              : 'PRESTAMOS POR PAGAR',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '220101',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '2202',
    nombre              : 'PREVISIONES O PROVISIONES',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '22',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '220201',
    nombre              : 'PREVISIONES Y PROVISIONES',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '2202',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '220201001',
    nombre              : 'PREVISION BENEFICIOS SOCIALES',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '220201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '220201002',
    nombre              : 'PROVISION AGUINALDOS',
    tipo                : 'PASIVO',
    numero_cuenta_padre : '220201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '3',
    nombre              : 'PATRIMONIO',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '31',
    nombre              : 'PATRIMONIO',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '3',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '3101',
    nombre              : 'PATRIMONIO',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '31',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310101',
    nombre              : 'CAPITAL SOCIAL',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '3101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310101001',
    nombre              : 'CAPITAL SOCIAL',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '310101',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310102',
    nombre              : 'APORTES POR CAPITALIZAR',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '3101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310103',
    nombre              : 'AJUSTE DE CAPITAL',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '3101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310103001',
    nombre              : 'AJUSTE DE CAPITAL',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '310103',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '3102',
    nombre              : 'RESERVAS',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '31',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310201',
    nombre              : 'RESERVA LEGAL',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '3102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310201001',
    nombre              : 'RESERVA LEGAL',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '310201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310202',
    nombre              : 'RESERVA PARA REVALUO ACTIVO FIJO',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '3102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310202001',
    nombre              : 'RESERVA PARA REVALUO ACTIVO FIJO',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '310202',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310203',
    nombre              : 'AJUSTE DE RESERVAS PATRIMONIALES',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '3102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310203001',
    nombre              : 'AJUSTE DE RESERVAS PATRIMONIALES',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '310203',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '3103',
    nombre              : 'AJUSTES AL PATRIMONIO',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '31',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310301',
    nombre              : 'AJUSTE GLOBAL DEL PATRIMONIO',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '3103',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310301001',
    nombre              : 'AJUSTE GLOBAL DEL PATRIMONIO',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '310301',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '3104',
    nombre              : 'RESULTADOS',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '31',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310401',
    nombre              : 'RESULTADOS ACUMULADOS',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '3104',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310401001',
    nombre              : 'RESULTADOS ACUMULADOS',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '310401',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310402',
    nombre              : 'RESULTADO DEL PERIODO',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '3104',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '310402001',
    nombre              : 'RESULTADO DEL PERIODO',
    tipo                : 'PATRIMONIO',
    numero_cuenta_padre : '310402',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '4',
    nombre              : 'INGRESO',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '41',
    nombre              : 'INGRESOS',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '4',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '4101',
    nombre              : 'INGRESOS OPERATIVOS',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '41',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '410101',
    nombre              : 'VENTAS Y/O SERVICIOS',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '4101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '410101001',
    nombre              : 'VENTA DE MERCADERIAS',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '410101',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '4102',
    nombre              : 'INGRESOS NO OPERATIVOS',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '41',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '410201',
    nombre              : 'OTROS INGRESOS',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '4102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '410201001',
    nombre              : 'OTROS INGRESOS',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '410201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '410201002',
    nombre              : 'ALQUILERES PERCIBIDOS',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '410201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '4103',
    nombre              : 'PRODUCTOS FINANCIEROS',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '41',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '410301',
    nombre              : 'PRODUCTOS FINANCIEROS',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '4103',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '410301001',
    nombre              : 'INTERESES GANADOS',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '410301',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '4104',
    nombre              : 'INGRESOS NO MONETARIOS',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '41',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '410401',
    nombre              : 'INGRESOS NO MONETARIOS',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '4104',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '410401001',
    nombre              : 'AJUSTE POR INFLACION Y TENDENCIA DE BIENES',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '410401',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '410401002',
    nombre              : 'DIFERENCIA DE CAMBIO Y REDONDEO',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '410401',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '410401003',
    nombre              : 'MANTENIMIENTO DE VALOR',
    tipo                : 'INGRESOS',
    numero_cuenta_padre : '410401',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '5',
    nombre              : 'GASTO',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '51',
    nombre              : 'GASTOS OPERATIVOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '5',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '5101',
    nombre              : 'COSTOS DE VENTAS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '51',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510101',
    nombre              : 'COSTOS DE VENTAS Y/O SERVICIOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '5101',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510101001',
    nombre              : 'COSTO DE VENTAS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510101',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '5102',
    nombre              : 'GASTOS ADMINISTRATIVOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '51',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510201',
    nombre              : 'REMUNERACIONES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '5102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510201001',
    nombre              : 'SUELDOS Y SALARIOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510201002',
    nombre              : 'AGUINALDOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510201003',
    nombre              : 'BENEFICIOS SOCIALES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510201004',
    nombre              : 'DESAHUCIOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510201005',
    nombre              : 'ALQUILER DE EQUIPOS DE COMUNICACION',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510201006',
    nombre              : 'VACACIONES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510201007',
    nombre              : 'HONORARIOS PROFESIONALES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510201008',
    nombre              : 'SUELDOS Y SALARIOS ADM',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510201009',
    nombre              : 'DOTACION UNIFORMES Y EQ. DE CONTINGENCIA',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510201',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510202',
    nombre              : 'IMPUESTOS, PATENTES Y CARGAS SOCIALES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '5102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510202001',
    nombre              : 'IMPUESTO A LAS UTILIDADES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510202',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510202002',
    nombre              : 'IMPUESTO A LAS TRANSACCIONES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510202',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510202003',
    nombre              : 'IMPUESTOS NO DEDUCIBLES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510202',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510202004',
    nombre              : 'MULTAS E INTERESES SOBRE IMPUESTOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510202',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510202005',
    nombre              : 'TASAS Y PATENTES MUNICIPALES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510202',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510202006',
    nombre              : 'CARGAS SOCIALES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510202',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510202007',
    nombre              : 'SUBSIDIOS VARIOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510202',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510203',
    nombre              : 'ALQUILERES Y MANTENIMIENTOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '5102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510203001',
    nombre              : 'ALQUILER DE OFICINAS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510203',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510203002',
    nombre              : 'MTTO EQ. DE COMPUTACION',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510203',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510203003',
    nombre              : 'MANTENIMIENTO DE OFICINAS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510203',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510203004',
    nombre              : 'MANTENIMIENTO DE VEHICULOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510203',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510203005',
    nombre              : 'MTTO. DE EQUIPO E INSTALACIONES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510203',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510204',
    nombre              : 'SERVICIOS BASICOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '5102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510204001',
    nombre              : 'ENERGIA ELECTRICA',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510204002',
    nombre              : 'AGUA POTABLE',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510204003',
    nombre              : 'SERVICIO DE COURRIER Y ENCOMIENDA',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510204004',
    nombre              : 'SERVICIO DE INTERNET Y CABLE',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510204005',
    nombre              : 'SERVICIO DE LIMPIEZA',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510204006',
    nombre              : 'SERVICIO DE REFRIGERIO',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510204007',
    nombre              : 'SERVICIO DE SEGURIDAD',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510204008',
    nombre              : 'SERVICIO DE TELEFONIA - FIJA',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510204009',
    nombre              : 'SERVICIO DE TELEFONIA CELULAR',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510204010',
    nombre              : 'SERVICIO DE TELEFONIA - COTAS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510204011',
    nombre              : 'ALUMBRADO PUBLICO',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510204012',
    nombre              : 'ASEO URBANO',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510204013',
    nombre              : 'SERVICIOS BASICOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510204014',
    nombre              : 'TASAS Y PATENTES MUNICIPALES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510204',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510205',
    nombre              : 'MATERIALES, SUMINISTROS Y OTROS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '5102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510205001',
    nombre              : 'MATERIAL DE ESCRITORIO Y OFICINA',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510205',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510205002',
    nombre              : 'FOTOCOPIAS, FORMULARIOS Y FOTOGRAFIAS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510205',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510205003',
    nombre              : 'COMBUSTIBLES Y LUBRICANTES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510205',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510205004',
    nombre              : 'PASAJES DEL PERSONAL ADM',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510205',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510205005',
    nombre              : 'CUOTAS CAMARAS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510205',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510206',
    nombre              : 'SEGUROS Y REASEGUROS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '5102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510206001',
    nombre              : 'SEGURO DE BIENES INMUEBLES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510206',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510206002',
    nombre              : 'SEGURO DE VEHICULOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510206',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510206003',
    nombre              : 'SEGURO DE BIENES MUEBLES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510206',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510206004',
    nombre              : 'SEGURO DE PERSONAS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510206',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510207',
    nombre              : 'VIAJES, HOSPEDAJES Y VIATICOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '5102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510207001',
    nombre              : 'TRANSPORTE AEREO',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510207',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510207002',
    nombre              : 'TRANSPORTE TERRESTRE',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510207',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510207003',
    nombre              : 'HOTELES Y HOSPEDAJES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510207',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510207004',
    nombre              : 'VIATICOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510207',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510208',
    nombre              : 'DEPRECIACION DE ACTIVOS FIJOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '5102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510208001',
    nombre              : 'DEPRECIACION EDIFICIOS Y CONSTRUCCIONES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510208',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510208002',
    nombre              : 'DEPRECIACION MUEBLES Y ENSERES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510208',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510208003',
    nombre              : 'DEPRECIACION MAQUINARIA, EQUIPO E INSTALACIONES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510208',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510208004',
    nombre              : 'DEPRECIACION VEHICULOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510208',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510208005',
    nombre              : 'DEPRECIACION HERRAMIENTAS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510208',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510208006',
    nombre              : 'DEPRECIACION EQUIPOS DE COMPUTACION',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510208',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510209',
    nombre              : 'GASTOS VARIOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '5102',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510209001',
    nombre              : 'TRAMITES LEGALES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510209',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510209002',
    nombre              : 'PERDIDA EN VENTA DE ACTIVOS FIJOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510209',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510209003',
    nombre              : 'OTROS GASTOS VARIOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510209',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510209004',
    nombre              : 'AMORTIZACION ORGANIZACION Y CONTITUCION',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510209',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '5103',
    nombre              : 'GASTOS DE VENTA',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '51',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510301',
    nombre              : 'GASTOS DE VENTA',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '5103',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510301001',
    nombre              : 'GASTOS DE VENTAS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510301',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510301002',
    nombre              : 'PUBLICIDAD Y SUSCRIPCIONES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510301',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '5104',
    nombre              : 'GASTOS FINANCIEROS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '51',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510401',
    nombre              : 'GASTOS FINANCIEROS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '5104',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510401001',
    nombre              : 'INTERESES Y COMISIONES BANCARIAS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510401',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510401002',
    nombre              : 'INTERESES Y COMISIONES SOBRE PRESTAMOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510401',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510401003',
    nombre              : 'IMPUESTO A LAS TRANSACCIONES FINANCIERAS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510401',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '5105',
    nombre              : 'GASTOS NO MONETARIOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '51',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510501',
    nombre              : 'GASTOS NO MONETARIOS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '5105',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510501001',
    nombre              : 'AJUSTE POR INFLACION Y TENENCIA DE BIENES',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510501',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510501002',
    nombre              : 'AJUSTE DIFERENCIA T/C Y REDONDEO',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510501',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510501003',
    nombre              : 'MANTENIMIENTO DE VALOR',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510501',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '5106',
    nombre              : 'GANANCIAS Y PERDIDAS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '51',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510601',
    nombre              : 'GANANCIAS Y PERDIDAS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '5106',
    cuenta_registrable  : false,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  },
  {

    id_empresa          : null,
    numero_cuenta       : '510601001',
    nombre              : 'GANANCIAS Y PERDIDAS',
    tipo                : 'GASTOS',
    numero_cuenta_padre : '510601',
    cuenta_registrable  : true,
    cuenta_monetaria    : false,
    numero_cuenta_sin   : '',
    nombre_cuenta_sin   : '',
    tipo_registro       : 'CONFIGURACION'
  }
];

// Asignando datos de log y timestamps a los datos
items = setTimestampsSeeder(items);

const getChildren = (numeroCuenta) => {
  return items.filter(item => item.numero_cuenta_padre === numeroCuenta);
};

const insertChildrens = async (queryInterface, numeroCuenta, idEmpresa) => {
  const newItems = getChildren(numeroCuenta);

  if (!newItems.length)  return [];

  for (const item of newItems) {
    item.id = uuid.v4();
    item.id_empresa = idEmpresa;
  }

  const insertChildrens = await queryInterface.bulkInsert('contabilidad_plan_cuenta', newItems, { returning: true });

  return insertChildrens;
};

module.exports = {
  async up (queryInterface, Sequelize) {
    for (const empresa of empresas) {
      const parents = items.filter(item => !item.numero_cuenta_padre);

      for (const parent of parents) {
        parent.id = uuid.v4();
        parent.id_empresa = empresa.id;
      }

      const insertParents = await queryInterface.bulkInsert('contabilidad_plan_cuenta', parents, { returning: true });

      for (const parent of insertParents) {
        const childrenLevelOne = await insertChildrens(queryInterface, parent.numero_cuenta, empresa.id);

        for (const childLevelOne of childrenLevelOne) {
          const childrenLevelTwo = await insertChildrens(queryInterface, childLevelOne.numero_cuenta, empresa.id);

          for (const childLevelTwo of childrenLevelTwo) {
            const childrenLevelTree = await insertChildrens(queryInterface, childLevelTwo.numero_cuenta, empresa.id);

            for (const childLevelTree of childrenLevelTree) {
              await insertChildrens(queryInterface, childLevelTree.numero_cuenta, empresa.id);
            }
          }
        }
      }
    }
  },

  down (queryInterface, Sequelize) { }
};
