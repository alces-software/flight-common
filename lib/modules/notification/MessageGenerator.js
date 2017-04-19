'use strict';

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


var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
// Class for generating messages for a particular code.
//
// The title, content and optional actions can be overridden with an override
// code, see the registerTitle, registerContent, and registerActions methods
// respectively.
//
// This is particularly useful for overriding based on the actionType
// submitted to the redux store.
//
var MessageGenerator = function () {
  function MessageGenerator(defaultTitle, defaultContent) {
    _classCallCheck(this, MessageGenerator);

    this.defaultTitle = defaultTitle;
    this.defaultContent = defaultContent;
    this.titles = {};
    this.contents = {};
    this.actions = {};
  }

  _createClass(MessageGenerator, [{
    key: 'registerTitle',
    value: function registerTitle(overrideCode, title) {
      this.titles[overrideCode] = title;
    }
  }, {
    key: 'registerContent',
    value: function registerContent(overrideCode, content) {
      this.contents[overrideCode] = content;
    }
  }, {
    key: 'registerActions',
    value: function registerActions(overrideCode, actions) {
      this.actions[overrideCode] = actions;
    }
  }, {
    key: 'generateMessage',
    value: function generateMessage(message, overrideCode) {
      var title = this.titles[overrideCode] || this.defaultTitle;
      if (_lodash2.default.isFunction(title)) {
        title = title(message) || this.defaultTitle;
      }
      var content = this.contents[overrideCode] || this.defaultContent;
      if (_lodash2.default.isFunction(content)) {
        content = content(message) || this.defaultContent;
      }
      var actions = this.actions[overrideCode];
      if (_lodash2.default.isFunction(actions)) {
        actions = actions(message);
      }
      return {
        title: title,
        content: content,
        actions: actions
      };
    }
  }]);

  return MessageGenerator;
}();

exports.default = MessageGenerator;