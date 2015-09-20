import React from 'react';
import { Nav, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';

import { ButtonLink } from './ButtonLink';

class Header extends React.Component {
  render() {
    return (
      <Navbar brand={<Link to="/">Alces Flight</Link>} inverse collapse fixedTop>
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
      <form className="navbar-form" role="search">
        <ButtonLink to="/sign-in" bsStyle="success" type="submit">Sign in</ButtonLink>
      </form>
    )
  }
}

Header.propTypes = {
  account: React.PropTypes.object,
  doSignOut: React.PropTypes.func.isRequired,
};

export default Header;
