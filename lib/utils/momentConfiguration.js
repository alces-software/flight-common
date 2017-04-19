'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lowerCaseCalendarConfig = undefined;
exports.lowerCaseCalendar = lowerCaseCalendar;
exports.upperCaseCalendar = upperCaseCalendar;
exports.timestamp = timestamp;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.updateLocale('en', {
  longDateFormat: {
    LT: 'HH:mm',
    L: 'ddd Do MMM YYYY',
    l: 'dd D MM YYYY'
  }
}); /*=============================================================================
     * Copyright (C) 2016 Stephen F. Norledge and Alces Software Ltd.
     *
     * This file is part of Alces FlightDeck.
     *
     * All rights reserved, see LICENSE.txt.
     *===========================================================================*/
var lowerCaseCalendarConfig = exports.lowerCaseCalendarConfig = {
  lastDay: '[yesterday at] LT',
  sameDay: '[today at] LT',
  nextDay: '[tomorrow at] LT',
  lastWeek: '[last] dddd [at] LT',
  nextWeek: 'dddd [at] LT',
  sameElse: 'L [at] LT'
};

function lowerCaseCalendar(date) {
  return (0, _moment2.default)(date).calendar(null, lowerCaseCalendarConfig);
}

function upperCaseCalendar(date) {
  return (0, _moment2.default)(date).calendar();
}

var timestampFormat = "YYYY-MM-DD HH:mm:ss Z";

function timestamp(date) {
  return (0, _moment2.default)(date).format(timestampFormat);
}