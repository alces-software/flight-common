import React, {PropTypes} from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

const iconNameToFontAwesomeProps = {
  /* Invitation icons */
  "invitation":           {name: "envelope"},
  "invitation-accept":    {name: "check"},
  "invitation-accepting": {name: "spinner", spin: true},
  "invitation-decline":   {name: "times"},
  "invitation-declining": {name: "spinner", spin: true},
  "invitation-pending":   {name: "hourglass-o", className: "animation-spinStopSpin"},

  /* Cluster icons */
  "clusters":           {name: "server"},
  "cluster":            {name: "server"},
  "cluster-pending":    {name: "hourglass-o", className: "animation-spinStopSpin"},
  "cluster-running":    {name: "cog", className: "animation-slowSpin"},
  "cluster-failed":     {name: "exclamation-circle"},
  "cluster-ssh-access": {name: "terminal"},
  "cluster-reference":  {name: "sun-o"},
  "cluster-launch":     {name: "rocket"},

  /* Environment icons */
  "environments":       {name: "bank"},
  "environment":        {name: "bank"},
  "environment-target": {name: "bullseye"},
  "environment-join":   {name: "share-square"},
  "environment-create": {name: "plus-square"},
  "environment-share":  {name: "share-alt-square"},

  /* Component icons */
  "component": {name: "puzzle-piece"},
  "component-create": {name: "plus-square"},

  /* Miscellaneous icons */
  "arrow-go": {name: "arrow-right"},
  "connect":  {name: "bolt"}
}

const faPropsForIconName = (iconName) => {
  const props = iconNameToFontAwesomeProps[iconName];
  return props ? props : {};
}

export default class Icon extends React.Component {
  render() {
    const faProps = faPropsForIconName(this.props.name);
    const classes = classNames(
      "flight-icon",
      `flight-icon-${this.props.name}`,
      faProps.className,
      this.props.className
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

Icon.propTypes = {
  ...FontAwesome.propTypes,
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};
