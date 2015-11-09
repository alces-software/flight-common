import React from 'react';

//
// If given a single child, will wrap it with a <p> tag unless it is already a
// valid react node.
//
// Useful for being able to write
//
//   <SomeComponent bodyText="my body text"/>
//
// instead of
//
//   <SomeComponent bodyText={<p>my body text</p>}/>
//
export default class WrappedWithPara extends React.Component {
  render() {
    const { children } = this.props;

    if (children === undefined) {
      return null;
    }

    const numberOfChildren = React.Children.count(children);
    if (numberOfChildren === 1 && ! React.isValidElement(children)) {
      return <p>{children}</p>;
    } else {
      return <div>{children}</div>;
    }
  }
}

WrappedWithPara.propTypes = {
  children: React.PropTypes.node.isRequired
};
