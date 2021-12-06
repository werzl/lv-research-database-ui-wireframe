import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export interface NavigationProps {
    user: any,
    onLogout: any
}

const Navigation = (props: NavigationProps) => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" style={{backgroundColor: "white"}}>
            <Navbar.Brand className="ms-2">
                <h3>Longview Partners</h3>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Research Dashboard</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/ResearchDiary">
                        <Nav.Link>Research Diary</Nav.Link>
                    </LinkContainer>
                </Nav>

                <Nav>
                    {props.user === null &&
                        <LinkContainer to="/Login">
                            <Nav.Link>
                                Login
                            </Nav.Link>
                        </LinkContainer>
                    }

                    {props.user !== null &&
                        <>
                            <LinkContainer to="/Login" onClick={() => props.onLogout()}>
                                <Nav.Link>
                                    Logout
                                </Nav.Link>
                            </LinkContainer>
                        </>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;