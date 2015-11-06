import React, {PropTypes} from 'react';
import { Badge, NavItem, OverlayTrigger } from 'react-bootstrap';
import {default as Icon} from 'react-fontawesome';
import classNames from 'classnames';
import _ from 'lodash';

export default class NavCounter extends React.Component {
  render() {
    const {counters} = this.props;
    const navItemClassNames = classNames(
      "flightNav-counter",
      `flightNav-counter-${this.props.name}`
    );
    const countersClassNames = classNames(
      "flightNav-control-counters",
      {"flightNav-control-counters--inactive": _.all(counters, c => c < 1)}
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
              {counters.map(counter => this.renderBadge(counter))}
            </span>
          </span>
        </OverlayTrigger>
      </NavItem>
    );
  }

  renderBadge(counter) {
    const badgeClassNames = classNames(
      "badge-primary", "flight-counter",
      {"flight-counter--zero": counter.count < 1}
    );
    return (
      <Badge className={badgeClassNames}>
        {counter.count}
      </Badge>
    );
  }
}

NavCounter.propTypes = {
  name: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  counters: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  overlay: PropTypes.node.isRequired
};
