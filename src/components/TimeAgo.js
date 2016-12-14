/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React from 'react';
import {default as ReactTimeAgo} from 'react-timeago';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import moment from 'moment';

import {timestamp, upperCaseCalendar} from '../utils/momentConfiguration';

export default class TimeAgo extends React.Component {
  render() {
    // eslint-disable-next-line no-unused-vars
    const {date, tooltipFormat, ...rest} = this.props;
    const tooltip = <Tooltip
      className="flight-livestamp-tooltip"
      id="timestamp"
      >
      {this.formatTooltip()}
    </Tooltip>

    return (
      <span className="flight-livestamp">
        <OverlayTrigger
          overlay={tooltip}
          placement={this.props.tooltipPlacement || "bottom"}
          >
          <ReactTimeAgo {...rest} date={date} formatter={this.formatTimestamp}/>
        </OverlayTrigger>
      </span>
    );
  }

  formatTimestamp(value, unit, suffix, date) {
    return moment(date).fromNow();
  }

  formatTooltip() {
    const {date, tooltipFormat} = this.props;

    if (tooltipFormat === "calendar") {
      return upperCaseCalendar(date);
    } else {
      return timestamp(date);
    }
  }
}
