/*=============================================================================
 * Copyright (C) 2015 Stephen F. Norledge and Alces Software Ltd.
 *
 * This file is part of Alces Flight.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React from 'react';
import { Button, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class ButtonLink extends React.Component {

  render() {
    /* eslint-disable no-redeclare */
    const { to, ...rest } = this.props;
    /* eslint-enable no-redeclare */
    return (
      <LinkContainer to={to} {...rest}>
        <Button {...rest}>{this.props.children}</Button>
      </LinkContainer>
    );
  }
}


export class NavItemLink extends React.Component {
  render() {
    /* eslint-disable no-redeclare */
    const { to, ...rest } = this.props;
    /* eslint-enable no-redeclare */
    return (
      <LinkContainer to={to} {...rest}>
        <NavItem {...rest}>{this.props.children}</NavItem>
      </LinkContainer>
    );
  }
}
