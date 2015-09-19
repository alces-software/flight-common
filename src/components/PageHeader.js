import React from 'react';
import { Jumbotron } from 'react-bootstrap';


class PageHeader extends React.Component {
  render() {
    const { header, subheader, children } = this.props;

    return (
        <Jumbotron>
          <div className="container">
            <h1>{header} <small>{subheader}</small></h1>
            <p>{children}</p>
          </div>
        </Jumbotron>
    )
  }
}

PageHeader.propTypes = {
  header: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
  ]).isRequired,

  subheader: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
  ]),
};

export default PageHeader;
