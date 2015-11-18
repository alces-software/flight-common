import React, {PropTypes} from 'react';
import { Badge } from 'react-bootstrap';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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

  render() {
    const {count, style} = this.props;

    const badgeClassNames = classNames(
      "flight-counter",
      {
        [`badge-${style}`]: style !== undefined,
        "badge-primary": style === undefined, 
        "flight-counter--zero": count < 1
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

  transitionName() {
    if (this.state.isIncrementing) {
      return "flight-nav-counter-animate-increment";
    } else if (this.state.isDecrementing) {
      return "flight-nav-counter-animate-decrement";
    } else {
      return "";
    }

  }
}

NavCounterBadge.propTypes = {
  count: PropTypes.number.isRequired,
  style: PropTypes.string
}
