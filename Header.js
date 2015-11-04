import React, {PropTypes} from 'react';
import {
  ButtonToolbar, CollapsibleNav, Nav, Navbar, NavDropdown, MenuItem
} from 'react-bootstrap';
import { Link } from 'react-router';
import {default as Icon} from 'react-fontawesome';

import { ButtonLink, NavItemLink } from './Links';
import NavCounter from './NavCounter';

class Header extends React.Component {
  render() {
    return (
      <Navbar brand={<Link to="/">Alces Flight</Link>} className="flightNav" fixedTop toggleNavKey={0}>
        <CollapsibleNav eventKey={0}>
          <Nav navbar>
            { this.props.account ? this.accountLeftNav() : this.annoymousLeftNav() }
          </Nav>
          { this.props.account ? this.accountRightNav() : this.annoymousRightNav() }
        </CollapsibleNav>
      </Navbar> 
    )
  }

  accountLeftNav() {
    const {environments} = this.props;
    if (environments.length > 0) {
      return (
        <NavItemLink to="/start">
          <Icon name="home"/> Start
        </NavItemLink>
      );
    } else {
      return (
        <NavItemLink to="/connect">
          <Icon name="bolt"/> Connect
        </NavItemLink>
      )
    }
  }

  accountRightNav() {
    const { account, doSignOut, invitations } = this.props;

    return (
      <Nav right navbar>
        <NavCounter
          countNumber={invitations.length}
          iconName="share"
          name="invitations"
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
  doSignOut: PropTypes.func.isRequired,
  invitations: PropTypes.array.isRequired
};

export default Header;
