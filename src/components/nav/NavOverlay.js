/*=============================================================================
 * Copyright (C) 2015-2016 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, {PropTypes} from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import classNames from 'classnames';
import { Link } from 'react-router'

import Icon from '../Icon';

export default class NavOverlay extends React.Component {
  render() {
    const title = <div className="flight-navOverlay-title">
      {this.props.title}
      {
        linkTo ?
          <Link
            to={linkTo}
            className="flight-navOverlay-link"
          >See all <Icon name="arrow-go"/>
          </Link>
          : null
      }
      <Icon
        className="flight-navOverlay-action flight-navOverlay-action-close"
        name="close"
        onClick={this.props.onHide}
      />
    </div>

    const classes = classNames(
      "flight-navOverlay",
      this.props.className
    );

    return (
      // We need to pass all of `this.props` to Overlay and Popover or it
      // won't be positioned or styled correctly.
      <Overlay
        {...this.props}
        placement="bottom"
        rootClose
        >
        <Popover
          {...this.props}
          id={this.props.id}
          title={title}
          className={classes}
        />
      </Overlay>
    );
  }
}

NavOverlay.propTypes = {
  linkTo: PropTypes.string,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
}
