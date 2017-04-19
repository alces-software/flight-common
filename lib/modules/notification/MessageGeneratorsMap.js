"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*=============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This file is part of Alces FlightDeck.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *===========================================================================*/


var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
// A map from message codes to message generators and an API for modifying
// that map.
//
var MessageGeneratorsMap = function () {
  function MessageGeneratorsMap() {
    _classCallCheck(this, MessageGeneratorsMap);

    this.messageGenerators = {};
    this.unexpectedGenerator = undefined;
  }

  _createClass(MessageGeneratorsMap, [{
    key: "addGeneratorForCode",
    value: function addGeneratorForCode(code, generator) {
      this.messageGenerators[code] = generator;
      return this;
    }
  }, {
    key: "addUnexpectedGenerator",
    value: function addUnexpectedGenerator(generator) {
      this.unexpectedGenerator = generator;
      return this;
    }
  }, {
    key: "getGeneratorForCode",
    value: function getGeneratorForCode(code) {
      return this.messageGenerators[code] || this.unexpectedGenerator;
    }
  }, {
    key: "customizeMessage",
    value: function customizeMessage(code, overrideCode, customizations) {
      var generator = this.getGeneratorForCustomization(code);

      _lodash2.default.forOwn(customizations, function (customizationValue, customizationType) {
        if (customizationType === "title") {
          generator.registerTitle(overrideCode, customizationValue);
        } else if (customizationType === "content") {
          generator.registerContent(overrideCode, customizationValue);
        } else if (customizationType === "actions") {
          generator.registerActions(overrideCode, customizationValue);
        } else {
          throw "Unsupported customization type " + customizationType;
        }
      });

      return this;
    }
  }, {
    key: "getGeneratorForCustomization",
    value: function getGeneratorForCustomization(code) {
      var generator = void 0;
      if (code === "unexpected") {
        generator = this.unexpectedGenerator;
      } else {
        generator = this.messageGenerators[code];
      }
      if (generator === undefined) {
        throw "No message generator registered for code " + code;
      } else {
        return generator;
      }
    }
  }]);

  return MessageGeneratorsMap;
}();

exports.default = MessageGeneratorsMap;