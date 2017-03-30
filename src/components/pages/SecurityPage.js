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

import PageHeader from '../PageHeader';

const propTypes = {
  copy: PropTypes.string.isRequired,
};

const SecurityPage = ({ copy }) => (
  <div>
    <Helmet title="Security" />
    <PageHeader header="Security Response">
      Keeping customer data safe and secure is a huge responsibility and
      our top priority.  We always welcome all your input and feedback on
      security issues.
    </PageHeader>
    <div className="flight-wideBody">
      <Grid fluid>
        <Row>
          <Well>
            <p>
              We really appreciate your concern, and would like to assure you
              that we treat all security issues with the highest priority and
              utmost seriousness.
            </p>
            <p>
              We ask for your patience while we make sure that your issue has
              been properly rectified.  Should there be a need, we will also
              notify upstream projects of flaws that may affect other users
              of their projects.
            </p>
          </Well>
        </Row>
        <Row>
          <Col md={10} mdOffset={1}>
            { /* eslint-disable react/no-danger */ }
            <div dangerouslySetInnerHTML={{ __html: copy }} />
            { /* eslint-enable react/no-danger */ }
          </Col>
        </Row>
      </Grid>
    </div>
  </div>
);

SecurityPage.propTypes = propTypes;

export default SecurityPage;
