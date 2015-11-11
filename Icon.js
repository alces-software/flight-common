import React from 'react';
import FontAwesome from 'react-fontawesome';

const iconNameToFontAwesomeProps = {
  "acceptInvitation":    {name: "check"},
  "acceptingInvitation": {name: "spinner", spin: true},
  "declineInvitation":   {name: "times"},
  "decliningInvitation": {name: "spinner", spin: true}
}

const faPropsForIconName = (iconName) => {
  const props = iconNameToFontAwesomeProps[iconName];
  return props ? props : {};
}

export default class Icon extends React.Component {
  render() {
    return (
      <FontAwesome
        {...this.props}
        {...faPropsForIconName(this.props.name)}
        className={`flight-icon-${this.props.name}`}
      />
    )
  }
}
