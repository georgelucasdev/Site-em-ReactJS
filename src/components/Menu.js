import { 
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink, } from 'reactstrap';
import React, { useState } from "react";
//import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';


export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src={logo} height="40" width="40"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/projetos">Projetos</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/contato">Contato</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/Sobre">Sobre</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/Politica-de-privacidade">Politica de Privacidade</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
        </>
    );
}