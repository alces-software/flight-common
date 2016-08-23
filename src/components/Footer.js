/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, {PropTypes} from 'react';

import moment from 'moment';

class Footer extends React.Component {
  render() {
    const {productName, content} = this.props;

    const currentYear = moment().format("YYYY");
    return (
      <footer>
        {productName} <span className="flightFooter-copyright">&copy;</span>
        &nbsp;2015&ndash;{currentYear}&nbsp;
        <a className="flightFooter-us" href="http://www.alces-flight.com">
          Alces&nbsp;Flight&nbsp;Ltd
        </a>
        {content}
      </footer>
    )
  }

  separatorBar() {
    return (
      <span className="flightFooter-bar" />
    );
  }
}

Footer.propTypes = {
  productName: PropTypes.string.isRequired,

  // TODO: May be nicer once this is used for FlightDeck to change this to an
  // array of link objects with keys for link name and address, then we can
  // generate the JSX including separators when we display these.
  content: PropTypes.node
}

export default Footer;
