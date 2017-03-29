/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, {PropTypes} from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const FooterLink = ({ to, text }) => (
  <Link to={to} className="flightFooter-link">{text}</Link>
);

const SeparatorBar = () => (
  <span className="flightFooter-bar" />
);

class Footer extends React.Component {
  render() {
    const {productName, firstCopyrightYear, links} = this.props;
    const currentYear = moment().format("YYYY");

    let copyrightYears;
    if (firstCopyrightYear != null && firstCopyrightYear !== currentYear) {
      copyrightYears = <span>{firstCopyrightYear}&ndash;{currentYear}</span>;
    } else {
      copyrightYears = currentYear;
    }

    return (
      <footer>
        {productName} <span className="flightFooter-copyright">&copy;</span>
        {' '}{copyrightYears}{' '}
        <a className="flightFooter-us" href="http://www.alces-flight.com">
          Alces&nbsp;Flight&nbsp;Ltd
        </a>
        {
          links.map(link => <span key={link.to}>
            <SeparatorBar /><FooterLink to={link.to} text={link.text} />
          </span>)
        }
      </footer>
    )
  }
}

Footer.propTypes = {
  productName: PropTypes.string.isRequired,

  firstCopyrightYear: PropTypes.string,

  // Additional links to add to the footer.
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.node.isRequired,
  })),
}

Footer.defaultProps = {
  firstCopyrightYear: "2015",
  links: [],
};

export default Footer;
