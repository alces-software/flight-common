import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { NavItem } from 'react-bootstrap';
import {default as Icon} from 'react-fontawesome';
import classNames from 'classnames';
import _ from 'lodash';

import NavCounterBadge from './NavCounterBadge';

export default class NavCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  handleHideOverlay() {
    this.setState({show: false});
  }

  handleToggleOverlay() {
    this.setState({show: !this.state.show});
  }

  render() {
    const {counters} = this.props;
    const navItemClassNames = classNames(
      "flight-NavCounter",
      `flight-NavCounter-${this.props.name}`
    );
    const countersClassNames = classNames(
      "flight-NavCounter-control-counters",
      {"flight-NavCounter-control-counters--inactive": _.all(
        counters, c => c.count < 1
      )}
    );

    const overlay = React.cloneElement(this.props.overlay, {
      container: this.props.overlayContainer,
      onHide: this.handleHideOverlay.bind(this),
      show: this.state.show,
      target: () => ReactDOM.findDOMNode(this)
    });

    return (
      <NavItem
        className={navItemClassNames}
        onClick={this.handleToggleOverlay.bind(this)}
        >
        <span className="flight-NavCounter-control flight-NavCounter-control--withIcon">
          <span className={countersClassNames}>
            <Icon name={this.props.iconName}/>
            {counters.map((counter, idx) => this.renderBadge(counter, idx))}
          </span>
        </span>
        {overlay}
      </NavItem>
    );
  }

  renderBadge(counter, idx) {
    return (
      <NavCounterBadge {...counter} key={idx}/>
    );
  }
}

const counterShape = {
  count: PropTypes.number.isRequired,
  style: PropTypes.string
}

NavCounter.propTypes = {
  name: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  counters: PropTypes.arrayOf(
    PropTypes.shape(counterShape).isRequired
  ).isRequired,
  overlay: PropTypes.node.isRequired
  // Currently, I pass an instance of a React class.  What is the correct
  // proptype for that?
  // overlayContainer: PropTypes.element.isRequired
};
