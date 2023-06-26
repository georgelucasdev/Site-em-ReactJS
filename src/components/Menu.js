import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, } from 'reactstrap';
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
                <NavLink href="/Sobre">Sobre</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Termos e Outros
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    <NavItem>
                        <NavLink href="/politica-de-privacidade">Politica de Privacidade</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem>
                        <NavLink href="/termos-e-condicoes">Termos e Condições</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem>
                        <NavLink href="/politica-de-reembolso">Política de Reembolso</NavLink>
                    </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
                <NavLink href="/Enigmas-da-escuridao">Enigmas da Escuridão</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
        </>
    );
}