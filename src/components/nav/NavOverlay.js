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
    const {
      title, linkTo, linkText, onHide, container, show, target, ...popoverProps
    } = this.props;

    const popoverTitle = <div className="flight-navOverlay-title">
      {title}
      {
        linkTo ?
          <Link
            to={linkTo}
            className="flight-navOverlay-link"
          >{linkText} <Icon name="arrow-go"/>
          </Link>
          : null
      }
      <Icon
        className="flight-navOverlay-action flight-navOverlay-action-close"
        name="close"
        onClick={onHide}
      />
    </div>

    const classes = classNames(
      "flight-navOverlay",
      this.props.className
    );

    return (
      // We need to pass all of `this.props` to Overlay or it won't be
      // positioned or styled correctly.
      <Overlay
        {...this.props}
        container={container}
        placement="bottom"
        rootClose
        show={show}
        target={target}
        >
        <Popover
          {...popoverProps}
          title={popoverTitle}
          className={classes}
        />
      </Overlay>
    );
  }
}

NavOverlay.defaultProps = {
  linkText: 'See all',
};

NavOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.any,
  id: PropTypes.string.isRequired,
  linkText: PropTypes.node,
  linkTo: PropTypes.string,
  onHide: PropTypes.func,
  title: PropTypes.node.isRequired,
}
