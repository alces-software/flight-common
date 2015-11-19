import React, {PropTypes} from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import classNames from 'classnames';

import Icon from 'components/Icon';

export default class NavOverlay extends React.Component {
  render() {
    const title = <div className="flight-navOverlay-title">
      {this.props.title}
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
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
}
