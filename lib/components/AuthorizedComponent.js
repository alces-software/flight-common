'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createAuthorize = createAuthorize;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*=============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015-2016 Stephen F. Norledge and Alces Software Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of Alces FlightDeck.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *===========================================================================*/


// Inspired by https://github.com/joshgeller/react-redux-jwt-auth-example.
//
// A higher order function that creates an `authorize` function using the given
// `mapStateToProps`. This function in turn creates an AuthorizedComponent,
// which denies access to its children based on the success or failure of the
// given authorizationFunction; when this fails the authorizationFailedHandler
// will be bound to the component and executed.
//
// For a usage example see
// https://github.com/alces-software/alces-access-manager/blob/develop/client/src/routes.js.
//
// TODO: Maybe this is overcomplicated? Maybe just provide single three
// argument function and let users curry it themselves if they want to?
function createAuthorize(mapStateToProps) {
  return function (authorizationFunction, authorizationFailedHandler) {
    var AuthorizedComponent = function (_React$Component) {
      _inherits(AuthorizedComponent, _React$Component);

      function AuthorizedComponent() {
        _classCallCheck(this, AuthorizedComponent);

        return _possibleConstructorReturn(this, (AuthorizedComponent.__proto__ || Object.getPrototypeOf(AuthorizedComponent)).apply(this, arguments));
      }

      _createClass(AuthorizedComponent, [{
        key: 'authorized',
        value: function authorized() {
          return authorizationFunction(this.props);
        }
      }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
          this.handleIfUnauthorized();
        }

        // TODO: does this method make sense as it is currently for non-Flight web
        // apps such as AAM?

      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          var authChanged = this.props.auth !== nextProps.auth;
          var envsChanged = this.props.environments !== nextProps.environments;

          if (authChanged || envsChanged) {
            this.handleIfUnauthorized();
          }
        }
      }, {
        key: 'handleIfUnauthorized',
        value: function handleIfUnauthorized() {
          if (!this.authorized()) {
            authorizationFailedHandler.bind(this)();
          }
        }
      }, {
        key: 'render',
        value: function render() {
          return _jsx('div', {}, void 0, this.authorized() ? this.props.children : null);
        }
      }]);

      return AuthorizedComponent;
    }(_react2.default.Component);

    return (0, _reactRedux.connect)(mapStateToProps)(AuthorizedComponent);
  };
}