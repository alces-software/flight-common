import React from 'react';

import StandardModal from 'components/StandardModal';
import generateErrorMessage from 'notification/errorMessageGeneration';

export default class Modal extends React.Component {
  render() {
    let message;

    if (this.props.error) {
      message = generateErrorMessage(this.props.error);
    } else if (this.props.message) {
      message = this.props.message;
    } else {
      message = {title: undefined, content: undefined};
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
