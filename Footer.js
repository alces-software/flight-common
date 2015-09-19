import React from 'react';
import {Component, PropTypes} from 'react';
import { Button, Input, Nav, Navbar, NavItem } from 'react-bootstrap';

require('../styles/footer.css');

class Footer extends Component {
  render() {
    return (
        <footer>
          <div className="container">
          <p className="text-muted">Alces Flight &copy; 2015 Alces Software Ltd</p>
          </div>
        </footer>
    )
  }
}

Footer.propTypes = {
};

export default Footer;
