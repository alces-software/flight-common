import React, {PropTypes} from 'react';
import { Badge, NavItem, OverlayTrigger } from 'react-bootstrap';
import {default as Icon} from 'react-fontawesome';
import classNames from 'classnames';

export default class NavCounter extends React.Component {
  render() {
    const {count} = this.props;
    const navItemClassNames = classNames(
      "flightNav-counter",
      `flightNav-counter-${this.props.name}`
    );
    const countersClassNames = classNames(
      "flightNav-control-counters",
      {"flightNav-control-counters--inactive": count < 1}
    );
    const badgeClassNames = classNames(
      "badge-primary", "flight-counter",
      {"flight-counter--zero": count < 1}
    );

    return (
      <NavItem className={navItemClassNames}>
        <OverlayTrigger
          overlay={this.props.overlay}
          placement="bottom"
          rootClose
          trigger="click"
          >
          <span className="flightNav-control flightNav-control--withIcon">
            <span className={countersClassNames}>
              <Icon name={this.props.iconName}/>
              <Badge className={badgeClassNames}>
                {count}
              </Badge>
            </span>
          </span>
        </OverlayTrigger>
      </NavItem>
    );
  }
}

NavCounter.propTypes = {
  name: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  overlay: PropTypes.node.isRequired
};
