import React from 'react';
import {connect} from 'react-redux';
import {redirectTo} from 'actions/router';

// Inspired by https://github.com/joshgeller/react-redux-jwt-auth-example.
// TODO comment how this works.
export function authorize(authorizationFunction) {

    class AuthorizedComponent extends React.Component {
        authorized() {
            return authorizationFunction(this.props);
        }

        componentWillMount() {
            this.redirectIfUnauthorized();
        }

        componentWillReceiveProps() {
            this.redirectIfUnauthorized();
        }

        redirectIfUnauthorized() {
            if (!this.authorized()) {
                this.props.dispatch(redirectTo(`/sign-in`));

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
