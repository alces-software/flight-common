'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Taken from
// https://github.com/v12/react-router-bootstrap/blob/94062a09ef91e725e6110ee4cfac8ca6a1cdf0c8/src/LinkContainer.js
// part of PR
// https://github.com/react-bootstrap/react-router-bootstrap/pull/201
//
// Licensed under Apache License 2.0

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

var LinkContainer = function (_Component) {
  _inherits(LinkContainer, _Component);

  function LinkContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkContainer.__proto__ || Object.getPrototypeOf(LinkContainer)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      var _this$props = _this.props,
          children = _this$props.children,
          onClick = _this$props.onClick;


      if (children.props.onClick) {
        children.props.onClick(event);
      }

      if (onClick) {
        onClick(event);
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props2 = _this.props,
              replace = _this$props2.replace,
              to = _this$props2.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LinkContainer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _children = _props.children,
          replace = _props.replace,
          to = _props.to,
          exact = _props.exact,
          strict = _props.strict,
          activeClassName = _props.activeClassName,
          className = _props.className,
          activeStyle = _props.activeStyle,
          style = _props.style,
          getIsActive = _props.isActive,
          props = _objectWithoutProperties(_props, ['children', 'replace', 'to', 'exact', 'strict', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive']);

      var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

      return _jsx(_reactRouterDom.Route, {
        path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
        exact: exact,
        strict: strict,
        children: function children(_ref2) {
          var location = _ref2.location,
              match = _ref2.match;

          var isActive = !!(getIsActive ? getIsActive(match, location) : match);

          return _react2.default.cloneElement(_react2.default.Children.only(_children), _extends({}, props, {
            className: isActive ? [className, activeClassName].join(' ') : className,
            style: isActive ? _extends({}, style, activeStyle) : style,
            href: href,
            onClick: _this2.handleClick
          }));
        }
      });
    }
  }]);

  return LinkContainer;
}(_react.Component);

LinkContainer.contextTypes = {
  router: _react.PropTypes.shape({
    history: _react.PropTypes.shape({
      push: _react.PropTypes.func.isRequired,
      replace: _react.PropTypes.func.isRequired,
      createHref: _react.PropTypes.func.isRequired
    }).isRequired
  }).isRequired
};
LinkContainer.propTypes = {
  children: _react.PropTypes.element.isRequired,
  onClick: _react.PropTypes.func,
  target: _react.PropTypes.string,
  replace: _react.PropTypes.bool,
  to: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
  exact: _react.PropTypes.bool,
  strict: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  activeClassName: _react.PropTypes.string,
  style: _react.PropTypes.object,
  activeStyle: _react.PropTypes.object,
  isActive: _react.PropTypes.func
};
LinkContainer.defaultProps = {
  replace: false,
  activeClassName: 'active'
};
exports.default = LinkContainer;