/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Badge } from 'react-bootstrap';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TICK = 17;
const flashAnimationDuration = 750 * 3;

export default class NavCounterBadge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isIncrementing: undefined,
      isDecrementing: undefined
    };
  }

  componentWillReceiveProps(nextProps) {
    const {count: nextCount} = nextProps;
    const {count: prevCount} = this.props;
    let isIncrementing, isDecrementing;

    if (nextCount > prevCount) {
      isIncrementing = true;
      isDecrementing = false;
    } else if (nextCount < prevCount) {
      isIncrementing = false
      isDecrementing = true;
    } else {
      isIncrementing = false;
      isDecrementing = false;
    }
    this.setState({
      isIncrementing,
      isDecrementing
    });
  }

  componentWillMount() {
    if (this.props.count > 0) {
      this.startFlashSequence()
    }
  }

  componentWillUpdate() {
    if (this.isChanging()) {
      const node = ReactDOM.findDOMNode(this);
      node.classList.add("flight-NavCounterBadge-animate-flash-enter");
    }
  }

  componentDidUpdate() {
    if (this.isChanging()) {
      this.startFlashSequence()
    }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  startFlashSequence() {
    this.timeout = setTimeout(this.addActiveClass.bind(this), TICK);
  }

  addActiveClass() {
    const node = ReactDOM.findDOMNode(this);
    node.classList.add("flight-NavCounterBadge-animate-flash-enter-active");
    this.timeout = setTimeout(
      this.removeClasses.bind(this),
      flashAnimationDuration
    );
  }

  removeClasses() {
    const node = ReactDOM.findDOMNode(this);
    node.classList.remove(
      "flight-NavCounterBadge-animate-flash-enter",
      "flight-NavCounterBadge-animate-flash-enter-active"
    );
    this.timeout = null;
  }

  render() {
    const {count, style} = this.props;

    const badgeClassNames = classNames(
      "flight-NavCounterBadge",
      {
        [`badge-${style}`]: style !== undefined,
        "badge-primary": style === undefined, 
        "flight-NavCounterBadge--zero": count < 1
      }
    );

    return (
      <Badge className={badgeClassNames}>
        <ReactCSSTransitionGroup
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          transitionName={this.transitionName()}
          >
          <span key={count}>{count}</span>
        </ReactCSSTransitionGroup>
      </Badge>
    );
  }

  isChanging() {
    const {isIncrementing, isDecrementing} = this.state;
    return isIncrementing || isDecrementing;
  }

  transitionName() {
    if (this.state.isIncrementing) {
      return "flight-NavCounterBadge-animate-increment";
    } else if (this.state.isDecrementing) {
      return "flight-NavCounterBadge-animate-decrement";
    } else {
      return "";
    }

  }
}

NavCounterBadge.propTypes = {
  count: PropTypes.number.isRequired,
  style: PropTypes.string
}
