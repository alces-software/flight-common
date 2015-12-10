import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class StandardModal extends React.Component {
  render() {
    const { bsSize, title, children, show, onHide } = this.props;
    const closeButtonText = this.props.closeButtonText || 'Close';

    return (
      <div>
        <Modal show={show} onHide={onHide} bsSize={bsSize}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            {this.props.buttons}
            <Button onClick={onHide}>{closeButtonText}</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
