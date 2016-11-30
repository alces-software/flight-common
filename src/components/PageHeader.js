/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

import WrappedWithPara from './WrappedWithPara';

class PageHeader extends React.Component {
  render() {
    const { button, header, size, subheader } = this.props;

    const jumbotronClasses = classNames("pageHeader", {
      [`pageHeader-${size}`]: size
    });
    const fluid = size === "small";

    return (
      <Jumbotron className={jumbotronClasses}>
        <Grid fluid={fluid}>
          <Row>
            <Col md={8}>
              <div className="pageHeader-body">
                <h1>{header} <small>{subheader}</small></h1>
                {this.props.children && <WrappedWithPara>{this.props.children}</WrappedWithPara>}
              </div>
            </Col>
            <Col md={4} className="pageHeader-actions">
              {button && <div className="pageHeader-actions-button">{button}</div>}
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    )
  }
}

PageHeader.propTypes = {
  header: React.PropTypes.node.isRequired,
  subheader: React.PropTypes.node,
  children: React.PropTypes.node,
  button: React.PropTypes.element
};

export default PageHeader;
