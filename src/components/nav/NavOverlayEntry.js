import React, {PropTypes} from 'react';
import moment from 'moment';
import TimeAgo from 'react-timeago';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import classNames from 'classnames';

import Icon from 'components/Icon';

export default class NavOverlayEntry extends React.Component {
  render() {
    const {
      actions, children, className, iconClasses, iconName, timestamp, title 
    } = this.props;
    const classes = classNames(
      "flight-navOverlay-entry",
      {[`flight-navOverlay-entry-${className}`]: className}
    );

    return (
      <div className={classes}>
        <div className="flight-navOverlay-entry-icon">
          <Icon name={iconName} className={iconClasses}/>
        </div>
        <div className="flight-navOverlay-entry-content">
          <div className="flight-navOverlay-entry-title">
            {title}
          </div>
          <div className="flight-navOverlay-entry-body">
            {children}
          </div>
          <OverlayTrigger
            overlay={<Tooltip id="timestamp">{moment(timestamp).calendar()}</Tooltip>}
            placement="bottom"
            >
            <div className="flight-navOverlay-entry-timestamp">
              <TimeAgo date={timestamp} formatter={this.formatTimestamp}/>
            </div>
          </OverlayTrigger>
          {actions ? actions.map((action, idx) => this.renderControl(action, idx)) : null}
        </div>
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
  iconClasses: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
