/*=============================================================================
 * Copyright (C) 2015-2016 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces FlightDeck.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, {PropTypes} from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

const iconNameToFontAwesomeProps = {
  // Invitation icons
  // Actions we can take on invitations and their feedback
  "invitation":           {name: "chain"},
  "invitation-accept":    {name: "check"},
  "invitation-accepting": {name: "spinner", spin: true},
  "invitation-decline":   {name: "times"},
  "invitation-declining": {name: "spinner", spin: true},
  // States that an invitation can be in
  "invitation-pending":   {name: "chain-broken"},
  "invitation-accepted":   {name: "chain"},
  "invitation-declined":   {name: "ban"},

  // Cluster icons
  "clusters":            {name: "server"},
  "cluster":             {name: "server"},
  "cluster-queueing":    {name: "hourglass-o", className: "animation-halfSpinStopSpin"},
  "cluster-onhold":      {name: "hand-stop-o"},
  "cluster-launching":   {name: "hourglass-o", className: "animation-halfSpinStopSpin"},
  "cluster-terminating": {name: "trash-o", className: "animation-fullSpinStopSpin"},
  "cluster-available":   {name: "cog", className: "animation-slowSpin"},
  "cluster-failed":      {name: "exclamation-circle"},
  "cluster-ssh-access":  {name: "terminal"},
  "cluster-reference":   {name: "sun-o"},
  "cluster-launch":      {name: "rocket"},
  "cluster-terminate":   {name: "stop"},
  "cluster-composition": {name: "list-alt"},
  "cluster-runtime":     {name: "hourglass-half"},

  // Environment icons
  "environments":       {name: "bank"},
  "environment":        {name: "bank"},
  "environment-target": {name: "bullseye"},
  "environment-join":   {name: "share-square"},
  "environment-create": {name: "plus-square"},
  "environment-share":  {name: "send"},
  "environment-owner":  {name: "key"},

  // Component icons
  "component": {name: "puzzle-piece"},
  "component-create": {name: "plus-square"},

  // Component template icons
  "componentTemplate": {name: "file-code-o"},
  "componentTemplate-create": {name: "plus-square"},

  // Cluster template icons
  "clusterTemplate": {name: "object-ungroup"},
  "clusterTemplate-create": {name: "plus-square"},

  // Miscellaneous icons
  "arrow-go":        {name: "arrow-right"},
  "arrow-return":    {name: "arrow-left"},
  "compute":         {name: "puzzle-piece"},
  "credit":          {name: "ticket"},
  "connect":         {name: "bolt"},
  "delete-resource": {name: "times"},
  "error":           {name: "exclamation-triangle"},
  "summary":         {name: "info-circle"},
  "quotas":          {name: "tachometer"},
  "share-resource":  {name: "share-alt"},
  "shared-resource": {name: "share-alt"},

  // Access Manager icons - for now these are prefixed to avoid collisions, at
  // some point we might want to unify them with above.
  "aam-cluster": {name: "rocket"},
  "aam-cluster-authenticating": {name: "spinner", spin: true},
  "aam-cluster-logout": {name: "sign-out"},
  "aam-cluster-pinging": {name: "spinner", spin: true},

  "aam-session-connect": {name: "link"},
  "aam-session-external-access": {name: "external-link-square"},
  "aam-session-external-access-back": {name: "arrow-circle-left"},
  "aam-session-external-access-info": {name: "info-circle"},
  "aam-session-launch": {name: "desktop"},
  "aam-session-launching": {name: "spinner", spin: true},
  "aam-session-password-hide": {name: "eye-slash"},
  "aam-session-password-reveal": {name: "eye"},

  "aam-vnc-volume-on": {name: "volume-up"},
  "aam-vnc-volume-off": {name: "volume-off"},
  "aam-vnc-copy": {name: "files-o"},
  "aam-vnc-paste": {name: "clipboard"},
  "aam-vnc-interactive": {name: "mouse-pointer"},
  "aam-vnc-drag-viewport": {name: "arrows"}
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
