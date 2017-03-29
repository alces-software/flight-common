/*=============================================================================
 * Copyright (C) 2017 Stephen F. Norledge and Alces Flight Ltd.
 *
 * This file is part of Alces Flight Common.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import sortBy from 'lodash/sortBy';

// Don't show licensing information for our own software.
function skipLicensable(licensable) {
  return licensable.publisher === 'Alces Flight Limited';
}

const LICENSE_HREFS = {
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
  'Flaticon Basic License': 'http://file000.flaticon.com/downloads/license/license.pdf',
};


function buildSoftwareLicensables(rawLicensables, manuallyInspectedLicenses) {
  return Object.keys(rawLicensables).reduce(
    (accum, i) => {
      const [name, version] = i.split('@');
      const adjustedLicense =
        manuallyInspectedLicenses[i] || rawLicensables[i].licenses;

      let licenses;
      if (Array.isArray(adjustedLicense)) {
        licenses = adjustedLicense.map(l => ({
          name: l,
          href: LICENSE_HREFS[l],
        }));
      } else {
        licenses = [{
          name: adjustedLicense,
          href: LICENSE_HREFS[adjustedLicense],
        }];
      }

      const licensable = {
        ...rawLicensables[i],
        licenses,
        name,
        version,
        componentType: 'JavaScript library',
        homePage: rawLicensables[i].repository,
        id: i,
      };

      if (skipLicensable(licensable)) {
        return accum;
      }

      accum.push(licensable);
      return accum;
    },
    [],
  );
}

function buildIconLicensables(icons) {
  return icons.reduce(
    (accum, i) => {
      let licenses;
      if (Array.isArray(i.licenses)) {
        licenses = i.licenses.map(l => ({
          name: l,
          href: LICENSE_HREFS[l],
        }));
      } else {
        licenses = [{
          name: i.licenses,
          href: LICENSE_HREFS[i.licenses],
        }];
      }

      const licensable = {
        ...i,
        licenses,
        componentType: 'Icon',
        homePage: i.originalUrl,
        id: i.name,
      };

      accum.push(licensable);
      return accum;
    },
    [],
  );
}

export default function buildLicensables(icons, softwareLicenses, manuallyInspectedLicenses={}) {
  const iconLicensables = buildIconLicensables(icons);
  const softwareLicensables = buildSoftwareLicensables(softwareLicenses, manuallyInspectedLicenses);

  return sortBy(iconLicensables, 'name')
    .concat(sortBy(softwareLicensables, 'name'));
}
