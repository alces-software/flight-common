/*=============================================================================
 * Copyright (C) 2015-2016 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, {PropTypes} from 'react';
import { Panel } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

export default class FlightPanel extends React.Component {
  render() {
    const classes = classNames(
      "flightPanel",
      this.props.className,
      {
        [`flightPanel-width--${this.props.width}`]: this.props.width,
        [`flightPanel-header--${this.props.headerSize}`]: this.props.headerSize
      }
    );

    return (
      <div className={classes}>
        <Panel header={this.renderHeader()}>
          {this.props.children}
        </Panel>
      </div>
    );
  }

  renderHeader() {
    const {header, headerButton} = this.props;

    if (header == null) {
      return null
    }

    return (
      <Grid fluid>
        <Row>
          <Col md={8} sm={9} xs={10} className="flightPanel-header-text">
            {header}
          </Col>
          <Col md={4} sm={3} xs={2} className="flightPanel-header-actions">
            <div className="flightPanel-header-actions-button">
              {headerButton}
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }

  wrapperClassNames() {
    const {width} = this.props;
    if (width === undefined) {
      return `flightPanel`;
    } else {
      return `flightPanel flightPanel--${width}`;
    }
  }
}

FlightPanel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  header: PropTypes.node,
  headerButton: PropTypes.node,
  headerSize: PropTypes.oneOf(["small"]),
  width: PropTypes.oneOf(["medium", "wide"])
}
