import React from 'react';
import { Jumbotron } from 'react-bootstrap';

require("styles/missingNotice.scss");

export default class MissingNotice extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <Jumbotron className="missingNotice">
        <h2 className="missingNotice-title">{title}</h2>
        <div className="missingNotice-body">
          {this.wrappedChildren()}
        </div>
      </Jumbotron>
    );
  }

  wrappedChildren() {
    const { children } = this.props;

    if (React.isValidElement(children)) {
      return children;
    } else {
      return <p>{children}</p>;
    }
  }
}

MissingNotice.propTypes = {
  title: React.PropTypes.node.isRequired,
  children: React.PropTypes.node.isRequired
};
