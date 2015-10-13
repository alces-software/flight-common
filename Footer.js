import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        Alces Flight <span className="flightFooter-copyright">&copy;</span> 2015&nbsp;
        <a className="flightFooter-us" href="http://www.alces-software.com">
          Alces&nbsp;Software&nbsp;Ltd
        </a>
        {this.separatorBar()}
        <Link to="/privacy" className="flightFooter-link">Privacy Policy</Link>
        {this.separatorBar()}
        <Link to="/terms" className="flightFooter-link">Terms of Service</Link>
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
