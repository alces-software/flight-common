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

import PrivacyPolicy, { cookieShape } from '../PrivacyPolicy';
import PageHeader from '../PageHeader';

const propTypes = {
  cookies: PropTypes.arrayOf(PropTypes.shape(cookieShape)),
  lastUpdated: PropTypes.string.isRequired,
  preCookieTableCopy: PropTypes.string.isRequired,
  postCookieTableCopy: PropTypes.string.isRequired,
};

const PrivacyPolicyPage = ({
  cookies,
  lastUpdated,
  postCookieTableCopy,
  preCookieTableCopy,
}) => (
  <div>
    <Helmet title="Privacy Policy" />
    <PageHeader header="Privacy Policy">
      This privacy policy sets out how Alces Flight uses and protects any
      information that you give Alces Flight when you use this website.
    </PageHeader>
    <div className="flight-wideBody">
      <Grid fluid>
        <Row>
          <Well>
            <p>
              Alces Flight is committed to ensuring that your privacy is
              protected. Should we ask you to provide certain information by
              which you can be identified when using this website, then you can
              be assured that it will only be used in accordance with this
              privacy statement.
            </p>
            <p>
              Alces Flight may change this policy from time to time by
              updating this page. You should check this page from time to time
              to ensure that you are happy with any changes. This policy is
              effective from {lastUpdated}.
            </p>
            <p>
              This page was last updated on {lastUpdated}.
            </p>
          </Well>
        </Row>
      </Grid>
      <Row>
        <Col md={10} mdOffset={1}>
          <PrivacyPolicy
            cookies={cookies}
            preCookieTableCopy={preCookieTableCopy}
            postCookieTableCopy={postCookieTableCopy}
          />
        </Col>
      </Row>
    </div>
  </div>
);

PrivacyPolicyPage.propTypes = propTypes;

export default PrivacyPolicyPage;
