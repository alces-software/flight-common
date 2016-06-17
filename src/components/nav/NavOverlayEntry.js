/*=============================================================================
 * Copyright (C) 2015-2016 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, {PropTypes} from 'react';
import moment from 'moment';
import { OverlayTrigger } from 'react-bootstrap';
import {Link} from 'react-router';
import classNames from 'classnames';

import Icon from 'components/Icon';
import TimeAgo from 'components/TimeAgo';

export default class NavOverlayEntry extends React.Component {
  render() {
    const {
      actions, children, className, iconName, linkTarget, timestamp, title 
    } = this.props;
    const classes = classNames(
      "flight-navOverlay-entry",
      {[`flight-navOverlay-entry-${className}`]: className}
    );

    return (
      <div className={classes}>
        <Link to={linkTarget}>
          <div className="flight-navOverlay-entry-icon">
            <Icon name={iconName}/>
          </div>
          <div className="flight-navOverlay-entry-content">
            <div className="flight-navOverlay-entry-title">
              {title}
            </div>
            <div className="flight-navOverlay-entry-body">
              {children}
            </div>
            <div className="flight-navOverlay-entry-timestamp">
              <TimeAgo date={timestamp} tooltipFormat="calendar"/>
            </div>
          </div>
        </Link>
        {actions ? actions.map((action, idx) => this.renderControl(action, idx)) : null}
      </div>
    );
  }

  renderControl(action, key) {
    const classes = classNames(
      "flight-navOverlay-entry-control",
      {[`flight-navOverlay-entry-control-${action.className}`]: action.className}
    );
    return (
      <OverlayTrigger
        overlay={action.tooltip}
        placement="bottom"
        container={this.props.overlayContainer}
        key={key}
        >
        <div className={classes}>
          <Icon name={action.iconName} onClick={action.onClick}/>
        </div>
      </OverlayTrigger>
    );
  }

  formatTimestamp(value, unit, suffix, date) {
    return moment(date).fromNow();
  }
}

const actionShape = {
  className: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  tooltip: PropTypes.element.isRequired
};

NavOverlayEntry.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape(actionShape).isRequired),
  iconName: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
