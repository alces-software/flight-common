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
    const {bsStyle, now, productName, progressDescription} = this.props;

    return (
      <div className="loading-indicator">
        <p>
          One moment please &mdash;
          {' '}<em className="nowrap">{productName}</em>{' '}
          is&nbsp;starting&nbsp;up.
        </p>
        <ProgressBar
          active
          bsStyle={bsStyle}
          className="loading-indicator-progress-bar"
          now={now}
          striped
        />
        {
          progressDescription
            ? <p>{progressDescription}&hellip;</p>
            : null
        }
      </div>
    )
  }
}

LoadingPage.propTypes = {
  bsStyle: ProgressBar.propTypes.bsStyle,
  now: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  progressDescription: PropTypes.string,
}

LoadingPage.defaultProps = {
  now: 100,
}

export default LoadingPage;
