import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LogoutIcon from '@mui/icons-material/Logout';

export interface NavigationProps {
    user: any,
    onLogout: any
}

const Navigation = (props: NavigationProps) => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: "white" }}>
            <Navbar.Brand className="ms-2">
                <h3>Longview Partners</h3>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/Diary">
                        <Nav.Link>Diary</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/Admin">
                        <Nav.Link>Admin</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>

            {props.user === null &&
                <LinkContainer to="/Login">
                    <Nav.Link>
                        Login
                    </Nav.Link>
                </LinkContainer>
            }

            {props.user !== null &&
                <LinkContainer to="/Login" onClick={() => props.onLogout()}>
                    <Nav.Link>
                        <LogoutIcon className="navigation-navbar-logoutLink" />
                    </Nav.Link>
                </LinkContainer>
            }

        </Navbar>
    );
};

export default Navigation;