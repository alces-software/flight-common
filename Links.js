import React from 'react';
import { Button, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class ButtonLink extends React.Component {

    render() {
         const { to, ...rest } = this.props;
         return (
           <LinkContainer to={to} {...rest}>
             <Button {...rest}>{this.props.children}</Button>
           </LinkContainer>
         );
    }
}


export class NavItemLink extends React.Component {
    render() {
         const { to, ...rest } = this.props;
         return (
           <LinkContainer to={to} {...rest}>
             <NavItem {...rest}>{this.props.children}</NavItem>
           </LinkContainer>
         );
    }
}
