'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /*=============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright (C) 2016 Stephen F. Norledge and Alces Flight Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * This file is part of Alces Prime.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *===========================================================================*/


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _LicensesLinks = require('./LicensesLinks');

var _LicensesLinks2 = _interopRequireDefault(_LicensesLinks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ref2 = _jsx('thead', {}, void 0, _jsx('tr', {}, void 0, _jsx('th', {}, void 0, 'Component'), _jsx('th', {}, void 0, 'Type'), _jsx('th', {}, void 0, 'Author'), _jsx('th', {}, void 0, 'Version'), _jsx('th', {}, void 0, 'License')));

var _ref3 = _jsx('span', {}, void 0, '\u2014');

var _ref4 = _jsx('span', {}, void 0, '\u2014');

var LicensableTable = function LicensableTable(_ref) {
  var licensables = _ref.licensables,
      footer = _ref.footer;
  return _jsx(_reactBootstrap.Table, {
    striped: true,
    bordered: true
  }, void 0, _jsx('colgroup', {}, void 0, _jsx('col', {
    span: '1',
    style: { width: '50%' }
  }), _jsx('col', {
    span: '1',
    style: { width: '10%' }
  }), _jsx('col', {
    span: '1',
    style: { width: '15%' }
  }), _jsx('col', {
    span: '1',
    style: { width: '12.5%' }
  }), _jsx('col', {
    span: '1',
    style: { width: '12.5%' }
  })), _ref2, _jsx('tbody', {}, void 0, licensables.map(function (licensable) {
    return _jsx('tr', {}, licensable.id, _jsx('td', {}, void 0, licensable.icon ? _jsx('span', {}, void 0, _jsx(_Icon2.default, {
      iconSrc: licensable.icon
    }), '\u2014') : null, _jsx('strong', {}, void 0, licensable.name), '\u2014', _jsx('a', {
      className: 'flight-link--external',
      href: licensable.homePage,
      rel: 'noopener noreferrer',
      target: '_blank'
    }, void 0, licensable.homePage)), _jsx('td', {}, void 0, licensable.componentType), _jsx('td', {}, void 0, licensable.publisher || _ref3), _jsx('td', {}, void 0, licensable.version || _ref4), _jsx('td', {}, void 0, _jsx(_LicensesLinks2.default, {
      licenses: licensable.licenses
    })));
  })), _jsx('tfoot', {}, void 0, footer));
};

LicensableTable.propTypes = {
  licensables: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  footer: _react.PropTypes.node.isRequired
};

var PaginatedLicensableTable = function (_React$Component) {
  _inherits(PaginatedLicensableTable, _React$Component);

  function PaginatedLicensableTable(props, context) {
    _classCallCheck(this, PaginatedLicensableTable);

    var _this = _possibleConstructorReturn(this, (PaginatedLicensableTable.__proto__ || Object.getPrototypeOf(PaginatedLicensableTable)).call(this, props, context));

    _this.state = {
      activePage: 1
    };
    _this.perPage = 10;

    _this.handlePageChange = _this.handlePageChange.bind(_this);
    return _this;
  }

  _createClass(PaginatedLicensableTable, [{
    key: 'handlePageChange',
    value: function handlePageChange(page) {
      this.setState({
        activePage: page
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var activePage = this.state.activePage;
      var startIndex = (activePage - 1) * this.perPage;
      var endIndex = activePage * this.perPage;
      var licensables = this.props.licensables;

      return _jsx(LicensableTable, {
        licensables: licensables.slice(startIndex, endIndex),
        footer: _jsx('tr', {}, void 0, _jsx('td', {
          className: 'paginator',
          colSpan: 5
        }, void 0, _jsx(_reactBootstrap.Pagination, {
          items: Math.ceil(licensables.length / this.perPage),
          activePage: activePage,
          onSelect: this.handlePageChange,
          prev: true,
          next: true,
          first: true,
          last: true,
          ellipsis: true,
          maxButtons: 10
        })))
      });
    }
  }]);

  return PaginatedLicensableTable;
}(_react2.default.Component);

PaginatedLicensableTable.propTypes = {
  licensables: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired
};

exports.default = PaginatedLicensableTable;