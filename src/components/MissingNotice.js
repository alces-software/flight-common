import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import WrappedWithPara from 'components/WrappedWithPara';

if (!__TEST__){
require("styles/missingNotice.scss");
}

export default class MissingNotice extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <Jumbotron className="missingNotice">
        <h2 className="missingNotice-title">{title}</h2>
        <div className="missingNotice-body">
          <WrappedWithPara>{this.props.children}</WrappedWithPara>
        </div>
      </Jumbotron>
    );
  }
}

MissingNotice.propTypes = {
  title: React.PropTypes.node.isRequired,
  children: React.PropTypes.node.isRequired
};
