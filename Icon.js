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
  "cluster-queueing":    {name: "hourglass-o", className: "animation-spinStopSpin"},
  "cluster-onhold":      {name: "hand-stop-o"},
  "cluster-launching":   {name: "hourglass-o", className: "animation-spinStopSpin"},
  "cluster-terminating": {name: "hourglass-o", className: "animation-spinStopSpin"},
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
  "environment-error":  {name: "exclamation-triangle"},

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
  "credit":          {name: "ticket"},
  "connect":         {name: "bolt"},
  "delete-resource": {name: "times"},
  "summary":         {name: "info-circle"},
  "quotas":          {name: "tachometer"},
  "share-resource":  {name: "share-alt"},
  "shared-resource": {name: "share-alt"}
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
