/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import WrappedWithPara from './WrappedWithPara';

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
