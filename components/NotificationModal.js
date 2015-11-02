import React from 'react';

import StandardModal from 'components/StandardModal';
import generateErrorMessage from 'notification/errorMessageGeneration';

export default class NotificationModal extends React.Component {
  render() {
    let message = this.props.message;

    if (message === undefined) {
      message = {title: undefined, content: undefined, messageId: "undefined"};
    } else if (message.messageType === "error") {
      message = generateErrorMessage(message);
    }

    return (
      <StandardModal
        title={message.title}
        onHide={this.props.onHide}
        show={this.props.show}
        >
        {message.content}
      </StandardModal>
    )
  }
}
