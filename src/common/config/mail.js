'use strict';

const debug = require('debug')('apostilla:correo');

const correoConfig = {
  origen    : process.env.EMAIL_SENDER || 'useradmin@unitru.edu.pe',
  host      : process.env.EMAIL_HOST || 'smtp.gmail.com', // localhost en el test o prod
  port      : process.env.EMAIL_PORT || 587, // 25 en el test o prod
  secure    : false,
  ignoreTLS : false,
  auth      : {
    user : 'useradmin@unitru.edu.pe', // Obligatorio para desarrollo
    pass : '12345678abc' // Obligatorio para desarrollo
  },
  tls: {
    rejectUnauthorized: false
  },
  logging: s => debug(s)
};

module.exports = correoConfig;
