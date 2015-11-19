import React, {PropTypes} from 'react';
import {
  ButtonToolbar, CollapsibleNav, Nav, NavBrand, Navbar, NavDropdown, MenuItem
} from 'react-bootstrap';
import { Link } from 'react-router';

import Icon from 'components/Icon';
import { ButtonLink, NavItemLink } from './Links';
import InvitationsNavCounter from './nav/InvitationsNavCounter';
import ClustersNavCounter from './nav/ClustersNavCounter';

class Header extends React.Component {
  render() {
    return (
      <Navbar className="flight-Navbar" fluid fixedTop toggleNavKey={0}>
        <NavBrand><Link to="/">Alces Flight</Link></NavBrand>
        <CollapsibleNav eventKey={0}>
          {this.navbar()}
        </CollapsibleNav>
      </Navbar>
    )
  }

  navbar() {
    // Wait until session has loaded before displaying anything in nav bar, to
    // avoid flashing incorrect buttons and giving the impression user can
    // interact with these.
    if (this.props.sessionLoaded) {
      return (
        <div>
          { this.props.account ? this.accountLeftNav() : this.anonymousLeftNav() }
          { this.props.account ? this.accountRightNav() : this.anonymousRightNav() }
        </div>
      )
    }
    else {
      return null;
    }
  }

  accountLeftNav() {
    const {hasEnvironments} = this.props;
    if (hasEnvironments) {
      return (
        <Nav navbar>
          <NavItemLink to="/start"><Icon name="home"/> Start</NavItemLink>
          <NavDropdown
            title={<span><Icon name="clusters"/> Clusters</span>}
            >
            <NavItemLink to="/clusters/launch"><Icon name="cluster-launch"/> Launch a cluster</NavItemLink>
            <NavItemLink to="/clusters"><Icon name="clusters"/> Access your clusters</NavItemLink>
          </NavDropdown>
          <NavDropdown
            title={<span><Icon name="environments"/> Environments</span>}
            >
            <NavItemLink to="/environments/new"><Icon name="environment-create"/> Define an environment</NavItemLink>
            <NavItemLink to="/environments/share"><Icon name="environment-share"/> Share an environment</NavItemLink>
            <NavItemLink to="/components/new"><Icon name="component-create"/> Define a component</NavItemLink>
            <NavItemLink to="/environments"><Icon name="environments"/> Manage your environments</NavItemLink>
          </NavDropdown>
        </Nav>
      );
    } else {
      return (
        <Nav navbar>
          <NavItemLink to="/connect">
            <Icon name="connect"/> Connect
          </NavItemLink>
        </Nav>
      )
    }
  }

  accountRightNav() {
    const { account, clusters, doSignOut, pendingInvitations } = this.props;

    return (
      <Nav right navbar>
        <ClustersNavCounter
          clusters={clusters}
          overlayContainer={this}
        />
        <InvitationsNavCounter
          invitations={pendingInvitations}
          onAcceptInvitation={this.props.onAcceptInvitation}
          onDeclineInvitation={this.props.onDeclineInvitation}
          overlayContainer={this}
        />
        <NavDropdown
          className="flight-Navbar-account-menu"
          eventKey={1}
          id="account-menu"
          title={account.name}
          >
          <MenuItem eventKey='1' onSelect={doSignOut}>Sign out</MenuItem>
        </NavDropdown>
      </Nav>
    )
  }

  anonymousLeftNav() {
    return null;
  }

  anonymousRightNav() {
    return (
      <Nav right navbar>
        <div>
          <form className="navbar-form" role="search">
            <ButtonToolbar>
              <ButtonLink to="/sign-up" bsStyle="success" type="submit">Sign up</ButtonLink>
              <ButtonLink to="/sign-in" bsStyle="success" type="submit">Sign in</ButtonLink>
            </ButtonToolbar>
          </form>
        </div>
      </Nav>
    )
  }
}

Header.propTypes = {
  account: PropTypes.object,
  clusters: PropTypes.array.isRequired,
  doSignOut: PropTypes.func.isRequired,
  hasEnvironments: PropTypes.bool.isRequired,
  pendingInvitations: PropTypes.array.isRequired,
  sessionLoaded: PropTypes.bool.isRequired
};

export default Header;
