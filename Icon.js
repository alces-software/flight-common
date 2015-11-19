import React from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

const iconNameToFontAwesomeProps = {
  /* Invitation icons */
  "acceptInvitation":    {name: "check"},
  "acceptingInvitation": {name: "spinner", spin: true},
  "declineInvitation":   {name: "times"},
  "decliningInvitation": {name: "spinner", spin: true},

  /* Cluster icons */
  "clusters":         {name: "server"},
  "clusterPending":   {name: "hourglass-o", className: "animation-spinStopSpin"},
  "clusterRunning":   {name: "cog", className: "animation-slowSpin"},
  "clusterFailed":    {name: "exclamation-circle"},
  "clusterSshAccess": {name: "terminal"},
  "clusterReference": {name: "sun-o"},
  "cluster-launch":   {name: "rocket"},

  /* Environment icons */
  "environments":       {name: "bank"},
  "environmentTarget":  {name: "bullseye"},
  "environment-join":   {name: "share-square"},
  "environment-create": {name: "plus-square"},
  "environment-share":  {name: "share-alt-square"},

  /* Component icons */
  "component-create": {name: "plus-square"},

  /* Miscalleneous icons */
  "connect": {name: "bolt"}
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
        [faProps.className]: faProps.className,
        [this.props.className]: this.props.className
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
