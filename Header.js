import React from 'react';
import {
  ButtonToolbar, CollapsibleNav, Nav, Navbar, NavDropdown, MenuItem
} from 'react-bootstrap';
import { Link } from 'react-router';
import {default as Icon} from 'react-fontawesome';

import { ButtonLink, NavItemLink } from './Links';

class Header extends React.Component {
  render() {
    return (
      <Navbar brand={<Link to="/">Alces Flight</Link>} className="flightNav" fixedTop toggleNavKey={0}>
        <CollapsibleNav eventKey={0}>
          <Nav navbar>
            { this.props.account ? this.accountLeftNav() : this.annoymousLeftNav() }
          </Nav>
          <Nav right navbar>
            { this.props.account ? this.accountRightNav() : this.annoymousRightNav() }
          </Nav>
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
    const { account, doSignOut } = this.props;

    return (
      <NavDropdown eventKey={1} title={account.name} id="account-menu-dropdown">
        <MenuItem eventKey='1' onSelect={doSignOut}>Sign out</MenuItem>
      </NavDropdown>
    )
  }

  annoymousLeftNav() {
    return null;
  }

  annoymousRightNav() {
    return (
      <div>
        <form className="navbar-form" role="search">
          <ButtonToolbar>
            <ButtonLink to="/sign-up" bsStyle="success" type="submit">Sign up</ButtonLink>
            <ButtonLink to="/sign-in" bsStyle="success" type="submit">Sign in</ButtonLink>
          </ButtonToolbar>
        </form>
      </div>
    )
  }
}

Header.propTypes = {
  account: React.PropTypes.object,
  doSignOut: React.PropTypes.func.isRequired
};

export default Header;
