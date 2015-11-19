import React from 'react';
import {connect} from 'react-redux';

// Inspired by https://github.com/joshgeller/react-redux-jwt-auth-example.
// TODO comment how this works.
export function authorize(authorizationFunction, authorizationFailedHandler) {

    class AuthorizedComponent extends React.Component {
        authorized() {
            return authorizationFunction(this.props);
        }

        componentWillMount() {
            this.handleIfUnauthorized();
        }

        componentWillReceiveProps() {
            this.handleIfUnauthorized();
        }

        handleIfUnauthorized() {
            if (!this.authorized()) {
                authorizationFailedHandler.bind(this)();

                // TODO: below from above example, adapt for our use.
                // let redirectAfterLogin = this.props.location.pathname;
                // this.props.dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
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

    const mapStateToProps = (state) => ({
      auth: state.auth
    });

    return connect(mapStateToProps)(AuthorizedComponent);
}
