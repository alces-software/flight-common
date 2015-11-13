import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import classNames from 'classnames';

import WrappedWithPara from 'components/WrappedWithPara';

class PageHeader extends React.Component {
  render() {
    const { header, size, subheader } = this.props;
    const jumbotronClasses = classNames("pageHeader", {
      [`pageHeader-${size}`]: size
    });
    const containerClasses = classNames({
      "container": !(this.props.size === "small"),
      "container-fluid": this.props.size === "small"
    });

    return (
        <Jumbotron className={jumbotronClasses}>
          <div className={containerClasses}>
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
