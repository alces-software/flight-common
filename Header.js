import React from 'react';
import {
  ButtonToolbar, Nav, Navbar, NavDropdown, MenuItem
} from 'react-bootstrap';
import { Link } from 'react-router';
import {default as Icon} from 'react-fontawesome';

import { ButtonLink, NavItemLink } from './Links';

class Header extends React.Component {
  render() {
    return (
      <Navbar brand={<Link to="/">Alces Flight</Link>} className="flightNav" fixedTop>
        <Nav>
          <NavItemLink to="/start">
            <Icon name="home"/> Start
          </NavItemLink>
        </Nav>
        <Nav right>
          { this.props.account ? this.accountNav() : this.annoymousNav() }
        </Nav>
      </Navbar> 
    )
  }

  accountNav() {
    const { account, doSignOut } = this.props;

    return (
      <NavDropdown eventKey={1} title={account.name} id="account-menu-dropdown">
        <MenuItem eventKey='1' onSelect={doSignOut}>Sign out</MenuItem>
      </NavDropdown>
    )
  }

  annoymousNav() {
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
  doSignOut: React.PropTypes.func.isRequired,
};

export default Header;
