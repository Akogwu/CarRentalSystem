import React from 'react';
import Container from "@mui/material/Container";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;