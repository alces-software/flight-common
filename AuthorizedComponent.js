import React from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';

// Inspired by https://github.com/joshgeller/react-redux-jwt-auth-example.
// TODO comment how this works.
export function authorize(Component) {

    class AuthorizedComponent extends React.Component {
        componentWillMount() {
            this.checkAuth();
        }

        componentWillReceiveProps() {
            this.checkAuth();
        }

        checkAuth() {
            if (!this.props.account) {
                this.props.dispatch(pushState(null, `/sign-in`));

                // TODO: below from above example, adapt for our use.
                // let redirectAfterLogin = this.props.location.pathname;
                // this.props.dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
            }
        }

        render() {
            // If a Component is given, wrap that as the component we are
            // checking permissions for; otherwise use this component's
            // children.
            let wrappedComponent;
            if (Component) {
                wrappedComponent = <Component {...this.props}/>;
            }
            else {
                wrappedComponent = this.props.children;
            }

            return (
                <div>
                    { this.props.account ? wrappedComponent : null }
                </div>
            )
        }
    }

    const mapStateToProps = (state) => ({
      account: state.auth.account
    });

    return connect(mapStateToProps)(AuthorizedComponent);
}
