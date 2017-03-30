/*=============================================================================
 * Copyright (C) 2016 Stephen F. Norledge and Alces Flight Ltd.
 *
 * This file is part of Alces Prime.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, { PropTypes } from 'react';

const propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
};

const LicenseLink = ({ name, href }) => {
  if (href == null) {
    return <span>{name}</span>;
  }
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {name}
    </a>
  );
};

LicenseLink.propTypes = propTypes;

export default LicenseLink;
