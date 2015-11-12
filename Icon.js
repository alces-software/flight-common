import React from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

const iconNameToFontAwesomeProps = {
  "acceptInvitation":    {name: "check"},
  "acceptingInvitation": {name: "spinner", spin: true},
  "declineInvitation":   {name: "times"},
  "decliningInvitation": {name: "spinner", spin: true},
  "clusterPending":      {name: "hourglass-o", className: "animation-spinStopSpin"},
  "clusterRunning":      {name: "cog", className: "animation-slowSpin"},
  "clusterFailed":       {name: "exclamation-circle"}
}

const faPropsForIconName = (iconName) => {
  const props = iconNameToFontAwesomeProps[iconName];
  return props ? props : {};
}

export default class Icon extends React.Component {
  render() {
    const faProps = faPropsForIconName(this.props.name);
    const classes = classNames(
      `flight-icon-${this.props.name}`,
      {
        [faProps.className]: faProps.className
      }
    )
    return (
      <FontAwesome
        {...this.props}
        {...faProps}
        className={classes}
      />
    )
  }
}
