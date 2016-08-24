/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, {PropTypes} from 'react';
import {ProgressBar} from 'react-bootstrap';

class LoadingPage extends React.Component {
  render() {
    const {productName} = this.props;

    return (
      <div className="loading-indicator">
        <p>
          One moment please &mdash;
          {' '}<em className="nowrap">{productName}</em>{' '}
          is&nbsp;starting&nbsp;up.
        </p>
        <ProgressBar
          active
          bsStyle="info"
          className="loading-indicator-progress-bar"
          now={100}
          striped
        />
      </div>
    )
  }
}

LoadingPage.propTypes = {
  productName: PropTypes.string.isRequired
}

export default LoadingPage;
