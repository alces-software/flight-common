import React from 'react';

require('styles/footer.scss');

class Footer extends React.Component {
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

export default Footer;
