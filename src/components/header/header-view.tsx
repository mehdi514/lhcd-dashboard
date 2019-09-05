import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import { RouteType } from '../../redux/navigation/models';

interface Props {
  navigateTo: (route: RouteType) => any;
}

export class HeaderView extends React.Component<Props> {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        {/* TODO: Replace app name with env var */}
        <Navbar.Brand onClick={() => this.props.navigateTo(RouteType.BASE)}>
          App Name
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => this.props.navigateTo(RouteType.BASE)}>
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => this.props.navigateTo(RouteType.DASHBOARD)}
            >
              Dashboard
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => this.props.navigateTo(RouteType.LOGIN)}>
              Login
            </Nav.Link>
            <Nav.Link onClick={() => this.props.navigateTo(RouteType.REGISTER)}>
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
