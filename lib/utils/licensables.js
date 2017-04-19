'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /*=============================================================================
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright (C) 2017 Stephen F. Norledge and Alces Flight Ltd.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * This file is part of Alces Flight Common.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * All rights reserved, see LICENSE.txt.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *===========================================================================*/


exports.default = buildLicensables;

var _sortBy = require('lodash/sortBy');

var _sortBy2 = _interopRequireDefault(_sortBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Don't show licensing information for our own software.
function skipLicensable(licensable) {
  return licensable.publisher === 'Alces Flight Limited';
}

var LICENSE_HREFS = {
  MIT: 'http://www.opensource.org/licenses/MIT',
  BSD: 'http://www.opensource.org/licenses/bsd-license',
  'BSD-2-Clause': 'http://www.opensource.org/licenses/bsd-license',
  'BSD-3-Clause': 'http://www.opensource.org/licenses/bsd-3-clause',
  Apache: 'http://www.opensource.org/licenses/Apache-2.0',
  'Apache 2.0 License': 'http://www.opensource.org/licenses/Apache-2.0',
  'Apache-2.0': 'http://www.opensource.org/licenses/Apache-2.0',
  'Apache 2': 'http://www.opensource.org/licenses/Apache-2.0',
  'Ruby License': 'http://www.ruby-lang.org/en/LICENSE.txt',
  'Ruby 1.8 License': 'http://www.ruby-lang.org/en/LICENSE.txt',
  ISC: 'http://www.opensource.org/licenses/ISC',
  LGPL: 'http://www.opensource.org/licenses/lgpl-license',
  'LGPL-3': 'http://www.opensource.org/licenses/LGPL-3.0',
  AGPL: 'http://www.opensource.org/licenses/AGPL-3.0',
  GPLv2: 'http://www.opensource.org/licenses/gpl-2.0',
  'SIL Open Font License': 'http://www.opensource.org/licenses/OFL-1.1',
  'Creative Commons Attribution 2.0': 'http://creativecommons.org/licenses/by/2.0/',
  'Creative Commons Attribution-ShareAlike 3.0': 'http://creativecommons.org/licenses/by-sa/3.0/',
  'Public Domain': 'http://creativecommons.org/publicdomain/mark/1.0/',
  'Public domain': 'http://creativecommons.org/publicdomain/mark/1.0/',
  WTFPL: 'http://www.wtfpl.net/',
  MPL: 'http://opensource.org/licenses/MPL-2.0',
  'Flaticon Basic License': 'http://file000.flaticon.com/downloads/license/license.pdf'
};

function buildSoftwareLicensables(rawLicensables, manuallyInspectedLicenses) {
  return Object.keys(rawLicensables).reduce(function (accum, i) {
    var _i$split = i.split('@'),
        _i$split2 = _slicedToArray(_i$split, 2),
        name = _i$split2[0],
        version = _i$split2[1];

    var adjustedLicense = manuallyInspectedLicenses[i] || rawLicensables[i].licenses;

    var licenses = void 0;
    if (Array.isArray(adjustedLicense)) {
      licenses = adjustedLicense.map(function (l) {
        return {
          name: l,
          href: LICENSE_HREFS[l]
        };
      });
    } else {
      licenses = [{
        name: adjustedLicense,
        href: LICENSE_HREFS[adjustedLicense]
      }];
    }

    var licensable = _extends({}, rawLicensables[i], {
      licenses: licenses,
      name: name,
      version: version,
      componentType: 'JavaScript library',
      homePage: rawLicensables[i].repository,
      id: i
    });

    if (skipLicensable(licensable)) {
      return accum;
    }

    accum.push(licensable);
    return accum;
  }, []);
}

function buildIconLicensables(icons) {
  return icons.reduce(function (accum, i) {
    var licenses = void 0;
    if (Array.isArray(i.licenses)) {
      licenses = i.licenses.map(function (l) {
        return {
          name: l,
          href: LICENSE_HREFS[l]
        };
      });
    } else {
      licenses = [{
        name: i.licenses,
        href: LICENSE_HREFS[i.licenses]
      }];
    }

    var licensable = _extends({}, i, {
      licenses: licenses,
      componentType: 'Icon',
      homePage: i.originalUrl,
      id: i.name
    });

    accum.push(licensable);
    return accum;
  }, []);
}

function buildLicensables(icons, softwareLicenses) {
  var manuallyInspectedLicenses = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var iconLicensables = buildIconLicensables(icons);
  var softwareLicensables = buildSoftwareLicensables(softwareLicenses, manuallyInspectedLicenses);

  return (0, _sortBy2.default)(iconLicensables, 'name').concat((0, _sortBy2.default)(softwareLicensables, 'name'));
}