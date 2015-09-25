import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class StandardModal extends React.Component {
  render() {
    const { bsSize, title, children, show, onHide } = this.props;

    return (
      <div>
        <Modal show={show} onHide={onHide} bsSize={bsSize}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default StandardModal
