import React, {PropTypes} from 'react';
import { Badge } from 'react-bootstrap';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TICK = 17;
const flashAnimationDuration = 750 * 3;

export default class NavCounterBadge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
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
      ...this.state,
      isIncrementing,
      isDecrementing
    });
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  addActiveClass() {
    this.timeout = null;
    this.setState({
      isActive: true,
      isIncrementing: false,
      isDecrementing: false
    })
  }

  removeClasses() {
    this.timeout = null;
    this.setState({
      isActive: false,
      isIncrementing: false,
      isDecrementing: false
    })
  }

  render() {
    const {count, style} = this.props;
    const {isActive, isIncrementing, isDecrementing} = this.state;
    const isChanging = isIncrementing || isDecrementing;

    const badgeClassNames = classNames(
      "flight-NavCounterBadge",
      {
        [`badge-${style}`]: style !== undefined,
        "badge-primary": style === undefined, 
        "flight-NavCounterBadge--zero": count < 1,
        "flight-NavCounterBadge-animate-flash-enter": isChanging || isActive,
        "flight-NavCounterBadge-animate-flash-enter-active": isActive
      }
    );

    if (isChanging && !this.timeout) {
      this.timeout = setTimeout(this.addActiveClass.bind(this), TICK);
    }
    if (isActive && !this.timeout) {
      this.timeout = setTimeout(
        this.removeClasses.bind(this),
        flashAnimationDuration
      );
    }

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
