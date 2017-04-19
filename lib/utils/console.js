"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
//
// Defines a wrapper around `console` to make eslint happy and to disable
// logging in production.
//

var consoleMethods = ["debug", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "warn"];

var Console = function Console() {
  var _this = this;

  _classCallCheck(this, Console);

  if (__DEVELOPMENT__ || __TEST__) {
    /* eslint-disable no-console */
    consoleMethods.forEach(function (cm) {
      if (console[cm]) {
        _this[cm] = console[cm].bind(console);
      } else {
        _this[cm] = function () {};
      }
    });
    /* eslint-enable no-console */
  } else {
    consoleMethods.forEach(function (cm) {
      _this[cm] = function () {};
    });
  }
};

exports.default = new Console();