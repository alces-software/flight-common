import React, {PropTypes} from 'react';
import { Panel } from 'react-bootstrap';
import classNames from 'classnames';

export default class FlightPanel extends React.Component {
  render() {
    const header = <span className="flightPanel-title">
      {this.props.header}
    </span>;

    const classes = classNames(
      "flightPanel",
      {
        [`flightPanel-width--${this.props.width}`]: this.props.width,
        [`flightPanel-header--${this.props.headerSize}`]: this.props.headerSize,
        [this.props.className]: this.props.className
      },
    );

    return (
      <div className={classes}>
        <Panel header={header}>
          {this.props.children}
        </Panel>
      </div>
    );
  }

  wrapperClassNames() {
    const {width} = this.props;
    if (width === undefined) {
      return `flightPanel`;
    } else {
      return `flightPanel flightPanel--${width}`;
    }
  }
}

FlightPanel.propTypes = {
  header: PropTypes.node.isRequired,
  headerSize: PropTypes.oneOf(["small"]),
  width: PropTypes.oneOf(["medium", "wide"])
}
