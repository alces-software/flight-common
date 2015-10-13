import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
  render() {
    return (
        <footer>
          <div className="container footer-text">
            <span className="text-muted">Alces Flight &copy; 2015 Alces Software Ltd</span>
            <span>
              <Link to="/terms">Terms of Service</Link>
            </span>
            <span>
              <Link to="/privacy">Privacy Policy</Link>
            </span>
          </div>
        </footer>
    )
  }
}

export default Footer;
