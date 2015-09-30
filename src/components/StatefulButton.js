import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

require('styles/glyphicon-spin.css');

class StatefulButton extends React.Component {
  render() {
    const { disabled, submitting } = this.props;

    return <Button bsStyle="success" {...this.props} disabled={disabled || submitting}>
      {this.renderContent(submitting)}
    </Button>
  }

  renderContent(submitting) {
    let content;
    if (submitting) {
      const text = this.props.submittingText || "Submitting...";
      content = <span>{text}&nbsp;
        <Glyphicon glyph='refresh' className="glyphicon-spin"/>
      </span>
    } else {
      content = this.props.children;
    }
    let icon = this.props.icon ? <Glyphicon glyph={this.props.icon}/> : '';
    return <span>{icon}&nbsp;{content}</span>;
  }
}

StatefulButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool,
  submittingText: React.PropTypes.string,
};

export default StatefulButton;
