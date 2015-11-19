import React from 'react';
import { Button, styleMaps } from 'react-bootstrap';

import Icon from 'components/Icon';

styleMaps.addStyle("sideEffect");

class StatefulButton extends React.Component {
  render() {
    const { disabled, submitting } = this.props;

    return (
      <Button
        bsStyle="success"
        {...this.props}
        disabled={disabled || submitting}
        >
        {this.renderContent(submitting)}
      </Button>
    )
  }

  renderContent(submitting) {
    let content;
    if (submitting) {
      const text = this.props.submittingText || "Submitting...";
      content = <span>{text}&nbsp;<Icon name='spinner' spin/></span>
    } else {
      content = this.props.children;
    }
    let icon = this.props.icon ? <Icon name={this.props.icon}/> : '';
    return <span>{icon}&nbsp;{content}</span>;
  }
}

StatefulButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool,
  submittingText: React.PropTypes.string
};

export default StatefulButton;
