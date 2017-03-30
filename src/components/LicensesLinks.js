/*=============================================================================
 * Copyright (C) 2016 Stephen F. Norledge and Alces Flight Ltd.
 *
 * This file is part of Alces Prime.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, { PropTypes } from 'react';

import LicenseLink from './LicenseLink';

const propTypes = {
  licenses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string,
  })).isRequired,
};

const LicensesLinks = ({ licenses }) => (
  <span>
    {
      licenses.map((license, i) => {
        if (i > 0) {
          return (
            <span>
              ,
              <LicenseLink key={i} name={license.name} href={license.href} />
            </span>
          );
        }
        return <LicenseLink key={i} name={license.name} href={license.href} />;
      })
    }
  </span>
);

LicensesLinks.propTypes = propTypes;

export default LicensesLinks;
