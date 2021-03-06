// This shim module exists to facilitate loading flight-common from our other
// projects in development mode.
//
// NOTE: This module must be valid es5.
//
// This file was generated by running:
//
//   babel index.es6.js --out-file index.js
//
// where the contents of index.es6.js are:
//
//   export * from './src/index';
//
/* eslint-disable no-undef */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./src/index');

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});
