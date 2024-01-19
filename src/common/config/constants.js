'use strict';

const constants = {
  ID_USUARIO_ADMIN              : '7171272e-b31b-4c34-9220-9f535c958c5c',
  ID_ROL_ADMIN_EMPRESA          : '75ce2822-a474-4f12-83cd-9d61d5044c21',
  CONFIGURACION_EMPRESA_DEFECTO : {
    planCuentas: {
      nroDigitos: 2
    },
    comprobantes: {
      numeroDocumento          : '',
      nombre                   : '',
      minGlosa                 : 2,
      tipoCorrelativo          : 'SUCURSAL',
      mayusculas               : false,
      copiarGlosaEspecifica    : false,
      copiarGlosaSuperior      : false,
      copiarReferenciaSuperior : false,
      idProyecto               : null
    },
    impresionComprobantes: {
      logoEmpresa              : true,
      direccionEmpresa         : true,
      literalMonedaAlternativa : false,
      tipoMoneda               : 'Bs',
      pieFirmaUno              : '',
      pieFirmaDos              : '',
      pieFirmaTres             : '',
      pieFirmaCuatro           : '',
      pieFirmaCinco            : ''
    },
    tributo: {
      iva : 13,
      it  : 3,
      iue : 25
    }
  }
};

module.exports = constants;
