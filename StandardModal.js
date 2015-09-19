import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class StandardModal extends React.Component {
  render() {
    const { title, children, show, onHide } = this.props;

    return (
      <div>
        <Modal show={show} onHide={onHide}>
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
