import React from 'react';

export default class LoadingPage extends React.Component {
  render() {
    return (
      <div className="portalLoadIndicator">
        <p>One moment please &mdash; <em>Alces&nbsp;Portal</em>&nbsp;is&nbsp;starting&nbsp;up.</p>
        <div className="portalLoadIndicator-container">
          <div className="portalLoadIndicator-indicator" style={{width: '100%'}}></div>
        </div>
      </div>
    )
  }
}
