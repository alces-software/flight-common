import React, {PropTypes} from 'react';
import {default as Icon} from 'react-fontawesome';
import moment from 'moment';

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
            {moment(timestamp).fromNow()}
          </div>
        </div>
      </div>
    );
  }
}

NavOverlayEntry.propTypes = {
  iconClasses: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
