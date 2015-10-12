import React from 'react';
import { Link } from 'react-router';

require('styles/footer.scss');

class Footer extends React.Component {
  render() {
    return (
        <footer>
          <div className="container footer-text">
            <span className="text-muted">Alces Flight &copy; 2015 Alces Software Ltd</span>
            <span>
              <Link to="/terms">Terms of Service</Link>
            </span>
          </div>
        </footer>
    )
  }
}

export default Footer;
