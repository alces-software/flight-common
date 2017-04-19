"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (fn) {
  return function (event) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (event && event.preventDefault) {
      event.preventDefault();
      event.stopPropagation();
      return fn.apply(undefined, args);
    }
    return fn.apply(undefined, _toConsumableArray([event].concat(args)));
  };
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /*=============================================================================
                                                                                                                                                                                                     * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
                                                                                                                                                                                                     *
                                                                                                                                                                                                     * This file is part of Alces FlightDeck.
                                                                                                                                                                                                     *
                                                                                                                                                                                                     * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                     *===========================================================================*/
//
// Return a function which runs the wrapped function `fn` without propagating
// any events.