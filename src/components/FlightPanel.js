import React, {PropTypes} from 'react';
import { Panel } from 'react-bootstrap';

export default class FlightPanel extends React.Component {
  render() {
    const header = <span className="flightPanel-title">
      {this.props.header}
    </span>;

    return (
      <div className={this.wrapperClassNames()}>
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
  width: PropTypes.oneOf(["medium", "wide"])
}
