/*=============================================================================
 * Copyright (C) 2016 Stephen F. Norledge and Alces Flight Ltd.
 *
 * This file is part of Alces Prime.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, { PropTypes } from 'react';
import { Table } from 'react-bootstrap';

import policyPreCopy from '../copy/privacyPolicyPreCookieTable.md';
import policyPostCopy from '../copy/privacyPolicyPostCookieTable.md';

const cookies = [
  {
    name: 'accepts-cookies',
    purpose: 'Application',
    description: "Records whether you've accepted our use of cookies.",
    expiration: '1 year',
  },
  {
    name: '_ga',
    purpose: 'Google Analytics',
    description: 'Used to distinguish users.',
    expiration: '2 years from latest visit',
  },
  {
    name: '_gat',
    purpose: 'Google Analytics',
    description: 'Used to throttle request rate.',
    expiration: '10 minutes',
  },
];

const CookieRow = ({ description, expiration, name, purpose }) => (
  <tr key={name}>
    <td>
      <code>{name}</code>
    </td>
    <td>{purpose}</td>
    <td>{description}</td>
    <td>{expiration}</td>
  </tr>
);

const cookieShape = {
  description: PropTypes.string.isRequired,
  expiration: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
};

CookieRow.propTypes = cookieShape;

const CookieTable = ({ cookies }) => (
  <div className="table-responsive">
    <Table responsive condensed hover>
      <thead>
        <tr>
          <th>Cookie</th>
          <th>Purpose</th>
          <th>Description</th>
          <th>Expiration</th>
        </tr>
      </thead>
      <tbody>
        {
          cookies.map(cookie => <CookieRow
            key={cookie.name}
            description={cookie.description}
            expiration={cookie.expiration}
            name={cookie.name}
            purpose={cookie.purpose}
          />)
        }
      </tbody>
    </Table>
  </div>
);

CookieTable.propTypes = {
  cookies: PropTypes.arrayOf(PropTypes.shape(cookieShape)).isRequired,
};

CookieTable.defaultProps = {
  cookies: cookies,
};

const PrivacyPolicy = () => (
  <div>
    { /* eslint-disable react/no-danger */ }
    <div dangerouslySetInnerHTML={{ __html: policyPreCopy }} />
    { /* eslint-enable react/no-danger */ }
    <CookieTable />
    { /* eslint-disable react/no-danger */ }
    <div dangerouslySetInnerHTML={{ __html: policyPostCopy }} />
    { /* eslint-enable react/no-danger */ }
  </div>
);

export default PrivacyPolicy;
