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
import { CustomerSupportLink, Icon, PageHeader } from 'flight-common';

import LicensableTable from '../LicensableTable';

const propTypes = {
  licensables: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageHeaderText: PropTypes.node.isRequired,
  productName: PropTypes.string.isRequired,
};

const AboutPage = ({ licensables, pageHeaderText, productName }) => (
  <div>
    <Helmet title="About" />
    <PageHeader header={`About ${productName}`}>
      {pageHeaderText}
    </PageHeader>
    <div className="flight-wideBody">
      <Grid fluid>
        <Row>
          <Well>
            <p>
              Alces Flight is committed to continually evolving
              {' '}<em>{productName}</em>, to provide the latest features helping
              our customers achieve their goals, in a secure and trusted
              environment. We manage this through promoting easy customer
              feedback and leveraging high quality open source software for
              quick turn-around on desired features.
            </p>
          </Well>
        </Row>
        <Row>
          <Col md={5} mdOffset={1}>
            <h3>Tell us what you want to see</h3>
            <p>
              <em>{productName}</em> is continually under development
              and we are always happy to receive feedback from all existing and
              potential users of the service to help shape its future
              capabilities and feature set.
            </p>
            <p>
              You can let us know what you would like to see by contacting
              {' '}<CustomerSupportLink />.
            </p>
            <h3>Security</h3>
            <p>
              Our software infrastructure is updated regularly with the latest
              security patches.  While perfect security is a moving target, we
              work with security researchers to keep up with the
              state-of-the-art in web security.
            </p>
            <p>
              If you would like to report a potential security problem or have
              noticed abuse, misuse or any kind of incident with your account,
              please visit our
              {' '}<Link to="/security">security response</Link>{' '}page for
              details on how to securely submit a report.
            </p>
          </Col>
          <Col md={5}>
            <h3>Always the latest and greatest</h3>
            <p>
              Features are added to the <em>{productName}</em> service
              via our policy of continuous delivery.  This means that you get
              access to the latest features as soon as they become available.
            </p>
            <h3>Talk to us</h3>
            <p>
              If you encounter any problems during your use of
              {' '}<em>{productName}</em>, please let us know by opening a support
              request.  You can do this by contacting <CustomerSupportLink />.
            </p>
            <p>
              Our development team will endeavour to reproduce and fix
              problems encountered promptly, and may ask for your assistance
              in replicating your problem.  Please note that, although we
              aim to provide updates as soon as possible, we cannot
              guarantee that a fix to a specific version of the product will
              be made available for all reported issues.
            </p>
            <p>
              For any other enquiries and communication regarding{' '}
              <em>{productName}</em> please use the standard Alces Customer
              Support email address: <CustomerSupportLink />.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={2} mdOffset={5}>
            <div className="flight-asteriskBreaker">
              <Icon name="asterisk" />
              <Icon name="asterisk" />
              <Icon name="asterisk" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={10} mdOffset={1}>
            <h2>Licensing</h2>
            <p>
              Alces Flight is a supporter of the open source software
              community.  Many of the components from which
              {' '}<em>{productName}</em> is built are licensed under{' '}
              <a
                className="flight-link--external"
                href="http://en.wikipedia.org/wiki/Free_and_open_source_software"
                rel="noopener noreferrer"
                target="_blank"
              >
                FLOSS
              </a>
              {' '}licenses.  For further information about licensing please
              contact
              the <CustomerSupportLink /> team.
            </p>
            <p>
              The open source libraries, frameworks and other components used
              to build and operate the <em>{productName}</em> application
              are detailed below.  If you should notice any irregularlities,
              please contact <CustomerSupportLink />.  All logos are owned by
              their respective copyright holders.
            </p>
            <LicensableTable licensables={licensables} />
          </Col>
        </Row>
      </Grid>
    </div>
  </div>
);

AboutPage.propTypes = propTypes;

export default AboutPage;
