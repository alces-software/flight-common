// This shim module exists to facilitate loading flight-common from our other
// projects in development mode.
//
// NOTE: This module must be valid es5.
/* eslint-disable no-undef */
exports = require('./src/index');
