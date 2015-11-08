import React, {PropTypes} from 'react';
import {default as Icon} from 'react-fontawesome';
import moment from 'moment';
import TimeAgo from 'react-timeago';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default class NavOverlayEntry extends React.Component {
  render() {
    const { children, iconClasses, iconName, timestamp, title } = this.props;

    return (
      <div className="flightOverlay-entry">
        <div className="flightOverlay-entry-icon">
          <Icon name={iconName} className={iconClasses}/>
        </div>
        <div className="flightOverlay-entry-content">
          <div className="flightOverlay-entry-title">
            {title}
          </div>
          <div className="flightOverlay-entry-body">
            {children}
          </div>
          <div className="flightOverlay-entry-timestamp">
            <OverlayTrigger overlay={<Tooltip>{moment(timestamp).calendar()}</Tooltip>} placement="bottom">
              <TimeAgo date={timestamp} formatter={this.formatTimestamp}/>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    );
  }

  formatTimestamp(value, unit, suffix, date) {
    return moment(date).fromNow();
  }
}

NavOverlayEntry.propTypes = {
  iconClasses: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
