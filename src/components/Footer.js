/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React from 'react';
import { Link } from 'react-router';

import moment from 'moment';

class Footer extends React.Component {
  render() {
    const currentYear = moment().format("YYYY");
    return (
      <footer>
        Alces FlightDeck <span className="flightFooter-copyright">&copy;</span>
        &nbsp;2015&ndash;{currentYear}&nbsp;
        <a className="flightFooter-us" href="http://www.alces-flight.com">
          Alces&nbsp;Flight&nbsp;Ltd
        </a>
        {this.separatorBar()}
        <Link to="/privacy" className="flightFooter-link">Privacy Policy</Link>
        {this.separatorBar()}
        <Link to="/terms" className="flightFooter-link">Terms of Service</Link>
        {this.separatorBar()}
        <Link to="/security" className="flightFooter-link">Security</Link>
      </footer>
    )
  }

  separatorBar() {
    return (
      <span className="flightFooter-bar" />
    );
  }
}

export default Footer;
