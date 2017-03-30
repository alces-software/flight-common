/*=============================================================================
 * Copyright (C) 2016 Stephen F. Norledge and Alces Flight Ltd.
 *
 * This file is part of Alces Prime.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Grid, Row, Col, Well } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import PageHeader from '../PageHeader';

const propTypes = {
  copy: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
};

const TermsOfServicePage = ({ copy, lastUpdated, productName }) => (
  <div>
    <Helmet title="Terms of Service" />
    <PageHeader header="Terms of Service">
      This page (taken with the documents and pages it refers to) tells you
      the terms of use which you agree to when you
      use <em>{productName}</em>.
    </PageHeader>
    <div className="flight-wideBody">
      <Grid fluid>
        <Row>
          <Well>
            <p>
              If you continue to browse and use this website, you are
              agreeing to comply with and be bound by the following terms and
              conditions of use which, together with our
              {' '}<Link to="/privacy">privacy policy</Link>,
              govern Alces Flight&rsquo;s relationship with you in relation to
              this website. If you disagree with any part of these terms and
              conditions, please do not use our website.
            </p>
            <p>
              This page was last updated on {lastUpdated}.
            </p>
          </Well>
        </Row>
        <Row>
          <Col md={10} mdOffset={1}>
            <h2>Terms and conditions of use</h2>
            { /* eslint-disable react/no-danger */ }
            <div dangerouslySetInnerHTML={{ __html: copy }} />
            { /* eslint-enable react/no-danger */ }
          </Col>
        </Row>
      </Grid>
    </div>
  </div>
);

TermsOfServicePage.propTypes = propTypes;

export default TermsOfServicePage;
