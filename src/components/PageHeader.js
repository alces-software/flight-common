import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import WrappedWithPara from 'components/WrappedWithPara';

class PageHeader extends React.Component {
  render() {
    const { header, subheader } = this.props;

    return (
        <Jumbotron className="pageHeader">
          <div className="container">
            <h1>{header} <small>{subheader}</small></h1>
            {this.props.children && <WrappedWithPara>{this.props.children}</WrappedWithPara>}
          </div>
        </Jumbotron>
    )
  }
}

PageHeader.propTypes = {
  header: React.PropTypes.node.isRequired,
  subheader: React.PropTypes.node,
  children: React.PropTypes.node
};

export default PageHeader;
