import React from 'react';
import { Link } from 'react-router';

require('styles/footer.css');

class Footer extends React.Component {
  render() {
    return (
        <footer>
          <div className="container">
            <p className="text-muted">Alces Flight &copy; 2015 Alces Software Ltd</p>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </footer>
    )
  }
}

export default Footer;
