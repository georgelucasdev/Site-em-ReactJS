import { Nav, NavLink, NavItem, NavbarBrand, NavbarToggler, Collapse, Navbar } from 'reactstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu() {
    return (
        <>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <NavbarBrand href="/">
                    GG Dev
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/">
                                Inicio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="Contato">
                                Contato
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="Sobre">
                                Sobre
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="Politica-de-privacidade">
                                Politica de Privacidade
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}