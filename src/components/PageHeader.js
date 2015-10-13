import React from 'react';
import { Jumbotron } from 'react-bootstrap';


class PageHeader extends React.Component {
  render() {
    const { header, subheader } = this.props;

    return (
        <Jumbotron className="pageHeader">
          <div className="container">
            <h1>{header} <small>{subheader}</small></h1>
            {this.wrappedChildren()}
          </div>
        </Jumbotron>
    )
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

PageHeader.propTypes = {
  header: React.PropTypes.node.isRequired,
  subheader: React.PropTypes.node,
  children: React.PropTypes.node.isRequired,
};

export default PageHeader;
