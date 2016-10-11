/*=============================================================================
 * Copyright (C) 2015-2016 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import {Navbar} from 'react-bootstrap';

// Import these components directly to make Babel optimizations happy.  One of
// the optimization plugins we use for production builds doesn't like the use
// of `Navbar.Brand` in JSX elements.
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';

class Header extends React.Component {
  render() {
    const {homePageLink, productName, children} = this.props;

    return (
      <Navbar className="flight-Navbar" fluid fixedTop>
        <NavbarHeader>
          <NavbarBrand className="flight-Navbar-brand">
            <Link to={homePageLink || "/"}>{productName}</Link>
          </NavbarBrand>
          <NavbarToggle/>
        </NavbarHeader>
        <NavbarCollapse>
          {children}
        </NavbarCollapse>
      </Navbar>
    )
  }
}

Header.propTypes = {
  homePageLink: PropTypes.string,
  productName: PropTypes.string.isRequired
}

export default Header;
