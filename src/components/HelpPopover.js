/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

import Icon from './Icon';

// Component to display a help popover for contained text when this is clicked.
class HelpPopover extends React.Component {
  render() {
    const {children, content} = this.props;
    const popover = (
      <Popover
        id='help-popover'
        {...this.props}
      >
        {content}
      </Popover>
      );

    return (
      <OverlayTrigger
        trigger="click"
        placement={this.props.placement}
        overlay={popover}
        >
        <abbr className="flight-help-popover">
          {children}
          <Icon name="question-circle"/>
        </abbr>
      </OverlayTrigger>
    )
  }
}

HelpPopover.propTypes = {

  // The text to trigger the popover.
  children: React.PropTypes.string.isRequired,

  // Popover content.
  content: React.PropTypes.element.isRequired,

  // Popover title.
  title: React.PropTypes.string

  // Any other props are optional and will be passed to the Popover element.
}

HelpPopover.defaultProps = {
  placement: 'top',
}

export default HelpPopover;
