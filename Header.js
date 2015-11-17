import React, {PropTypes} from 'react';
import {
  ButtonToolbar, CollapsibleNav, Nav, NavBrand, Navbar, NavDropdown, MenuItem
} from 'react-bootstrap';
import { Link } from 'react-router';
import {default as Icon} from 'react-fontawesome';

import { ButtonLink, NavItemLink } from './Links';
import InvitationsNavCounter from './nav/InvitationsNavCounter';
import ClustersNavCounter from './nav/ClustersNavCounter';

class Header extends React.Component {
  render() {
    return (
      <Navbar className="flightNav" fluid fixedTop toggleNavKey={0}>
        <NavBrand><Link to="/">Alces Flight</Link></NavBrand>
        <CollapsibleNav eventKey={0}>
          { this.props.account ? this.accountLeftNav() : this.annoymousLeftNav() }
          { this.props.account ? this.accountRightNav() : this.annoymousRightNav() }
        </CollapsibleNav>
      </Navbar> 
    )
  }

  accountLeftNav() {
    const {hasEnvironments} = this.props;
    if (hasEnvironments) {
      return (
        <Nav navbar>
          <NavItemLink to="/start"><Icon name="home"/> Start</NavItemLink>
          <NavDropdown
            title={<span><Icon name="server"/> Clusters</span>}
            >
            <NavItemLink to="/clusters/launch"><Icon name="rocket"/> Launch a cluster</NavItemLink>
            <NavItemLink to="/clusters"><Icon name="server"/> Access your clusters</NavItemLink>
          </NavDropdown>
          <NavDropdown
            title={<span><Icon name="bank"/> Environments</span>}
            >
            <NavItemLink to="/environments/new"><Icon name="plus-square"/> Define an environment</NavItemLink>
            <NavItemLink to="/environments/share"><Icon name="share-alt-square"/> Share an environment</NavItemLink>
            <NavItemLink to="/components/new"><Icon name="plus-square"/> Define a component</NavItemLink>
            <NavItemLink to="/environments"><Icon name="plus-square"/> Manage your environments</NavItemLink>
          </NavDropdown>
        </Nav>
      );
    } else {
      return (
        <Nav navbar>
          <NavItemLink to="/connect">
            <Icon name="bolt"/> Connect
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
          className="flightNav-account-menu"
          eventKey={1}
          id="account-menu"
          title={account.name}
          >
          <MenuItem eventKey='1' onSelect={doSignOut}>Sign out</MenuItem>
        </NavDropdown>
      </Nav>
    )
  }

  annoymousLeftNav() {
    return null;
  }

  annoymousRightNav() {
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
  pendingInvitations: PropTypes.array.isRequired
};

export default Header;
