/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, {PropTypes} from 'react';

import StandardModal from '../../../components/StandardModal';
import {
  generateErrorMessage, generateInformationMessage
} from '../messageGeneration';
import MessageGeneratorsMap from '../MessageGeneratorsMap';

export default class NotificationModal extends React.Component {
  render() {
    const {infoGeneratorsMap, errorGeneratorsMap} = this.props;
    let message = this.props.message;

    if (message === undefined) {
      message = {title: undefined, content: undefined, messageId: "undefined"};
    } else if (message.messageType === "error") {
      message = generateErrorMessage(errorGeneratorsMap, message);
    } else {
      message = generateInformationMessage(infoGeneratorsMap, message);
    }

    return (
      <StandardModal
        title={message.title}
        onHide={this.props.onHide}
        show={this.props.show}
        buttons={message.actions}
        >
        {message.content}
      </StandardModal>
    )
  }
}

const messageShape = {
  title: PropTypes.string,
  content: PropTypes.string
};

NotificationModal.propTypes = {
  message: PropTypes.shape(messageShape),
  infoGeneratorsMap: PropTypes.instanceOf(MessageGeneratorsMap).isRequired,
  errorGeneratorsMap: PropTypes.instanceOf(MessageGeneratorsMap).isRequired
}
