/*=============================================================================
 * Copyright (C) 2015-2016 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, {PropTypes} from 'react';
import { connect } from 'react-redux';

import Modal from './NotificationModal';
import {closeModal} from '../actions';

//
// Wrapper around NotificationModal to enable smooth transitions when we are
// closing one NotificationModal and there is another one to display.
//
// We have two NotificationModals, one representing the modal that is
// currently being shown and the other representing the modal that is being
// closed.
//
class NotificationModals extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
  }

  handleCloseNotification() {
    return this.props.dispatch(closeModal());
  }

  render() {
    const {
      errorGeneratorsMap,
      infoGeneratorsMap
    } = this.props;

    const currentModalId = this.props.currentModal ?
      this.props.currentModal.messageId :
      "undefinedCurrentModal";

    const exitingModalId = this.props.exitingModal ?
      this.props.exitingModal.messageId :
      "undefinedExitingModal";

    return (
      <div>
        {/* The current modal to display. */}
        <Modal
          show={this.props.showingModal}
          onHide={this.handleCloseNotification}
          message={this.props.currentModal}
          key={currentModalId}
          errorGeneratorsMap={errorGeneratorsMap}
          infoGeneratorsMap={infoGeneratorsMap}
        />
        {/* The modal that has just been closed. */}
        <Modal
          show={false}
          onHide={() => {}}
          message={this.props.exitingModal}
          key={exitingModalId}
          errorGeneratorsMap={errorGeneratorsMap}
          infoGeneratorsMap={infoGeneratorsMap}
        />
      </div>
    )
  }
}

// A modal message also has a payload of some variety, but that varies
// depending on the message type, so I haven't specified it here.
const modalShape = {
  messageId: PropTypes.number.isRequired,
  messageType: PropTypes.string.isRequired
};

NotificationModals.propTypes = {
  // Whether we are displaying a modal / animating one in.
  showingModal: PropTypes.bool.isRequired,
  // The modal that is currently being displayed / is animating in.
  currentModal: PropTypes.shape(modalShape),
  // The modal that is currently being hidden / is animating out.
  exitingModal: PropTypes.shape(modalShape)
}

const mapStateToProps = (state) => {
  const {notifications: {errorGeneratorsMap, infoGeneratorsMap}} = state;
  return {
    errorGeneratorsMap,
    infoGeneratorsMap
  }
}

export default connect(
  mapStateToProps
)(NotificationModals);
