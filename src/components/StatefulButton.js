/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React from 'react';
import {Button} from 'react-bootstrap';
import bootstrapUtils from 'react-bootstrap/lib/utils/bootstrapUtils';

import Icon from 'components/Icon';

bootstrapUtils.addStyle(Button, ["sideEffect"]);

class StatefulButton extends React.Component {
  render() {
    const { disabled, submitting } = this.props;

    return (
      <Button
        bsStyle="success"
        {...this.props}
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
  onClick: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool,
  submittingText: React.PropTypes.string
};

export default StatefulButton;
