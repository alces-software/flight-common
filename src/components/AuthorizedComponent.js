/*=============================================================================
 * Copyright (C) 2015-2016 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React from 'react';
import {connect} from 'react-redux';

// Inspired by https://github.com/joshgeller/react-redux-jwt-auth-example.
//
// A higher order function that creates an `authorize` function using the given
// `mapStateToProps`. This function in turn creates an AuthorizedComponent,
// which denies access to its children based on the success or failure of the
// given authorizationFunction; when this fails the authorizationFailedHandler
// will be bound to the component and executed.
//
// For a usage example see
// https://github.com/alces-software/alces-access-manager/blob/develop/client/src/routes.js.
//
// TODO: Maybe this is overcomplicated? Maybe just provide single three
// argument function and let users curry it themselves if they want to?
export function createAuthorize(mapStateToProps) {
  return (authorizationFunction, authorizationFailedHandler) => {

    class AuthorizedComponent extends React.Component {
      authorized() {
        return authorizationFunction(this.props);
      }

      componentWillMount() {
        this.handleIfUnauthorized();
      }

      // TODO: does this method make sense as it is currently for non-Flight web
      // apps such as AAM?
      componentWillReceiveProps(nextProps) {
        const authChanged = this.props.auth !== nextProps.auth;
        const envsChanged = this.props.environments !== nextProps.environments;

        if (authChanged || envsChanged) {
          this.handleIfUnauthorized();
        }
      }

      handleIfUnauthorized() {
        if (!this.authorized()) {
          authorizationFailedHandler.bind(this)();
        }
      }

      render() {
        return (
          <div>
            { this.authorized() ? this.props.children : null }
          </div>
          )
      }
    }

    return connect(mapStateToProps)(AuthorizedComponent);
  }
}
