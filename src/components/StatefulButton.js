/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React from 'react';
import {Button, utils} from 'react-bootstrap';

import Icon from './Icon';

utils.bootstrapUtils.addStyle(Button, "sideEffect");

class StatefulButton extends React.Component {
  render() {
    const {
      /* eslint-disable no-unused-vars */
      submittingText,
      /* eslint-enable no-unused-vars */

      disabled,
      submitting,
        ...rest
    } = this.props;

    return (
      <Button
        bsStyle="success"
        {...rest}
        disabled={disabled || submitting}
      >
        {this.renderContent(submitting)}
      </Button>
    )
  }

  renderContent(submitting) {
    let content;
    if (submitting) {
      const text = this.props.submittingText || "Submitting...";
      content = <span>{text}{' '}<Icon name='spinner' spin/></span>
    } else {
      content = this.props.children;
    }
    let icon = this.props.icon ? <Icon name={this.props.icon}/> : null;
    if (icon) {
      return <span>{icon}{' '}{content}</span>;
    } else {
      return content;
    }
  }
}

StatefulButton.propTypes = {
  block: Button.propTypes.block,
  bsSize: Button.propTypes.bsSize,
  bsStyle: Button.propTypes.bsStyle,
  onClick: React.PropTypes.func,
  submitting: React.PropTypes.bool,
  submittingText: React.PropTypes.string
};

export default StatefulButton;
