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
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';


export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <>
        <Navbar color="navbar navbar-dark bg-dark" light expand="md" >
        <NavbarBrand href="/"><img src={logo} height="40" width="40"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar black>
              <DropdownToggle nav caret>
                Aplicativos
              </DropdownToggle>
              <DropdownMenu right dark>
                <DropdownItem>
                    <NavItem >
                        <NavLink href="https://play.google.com/store/apps/details?id=com.chat.gptbr">Inteligência Artificial</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem>
                        <NavLink href="https://play.google.com/store/apps/details?id=com.aprendizado.escola">Pré-Escola: Leitura Mágica</NavLink>
                    </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar black>
              <DropdownToggle nav caret >
                Jogos
              </DropdownToggle>
              <DropdownMenu right dark>
                <DropdownItem>
                    <NavItem >
                        <NavLink href="https://play.google.com/store/apps/details?id=com.georgelucas.seashark">BeBê Tubarão: Aventuras</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem>
                        <NavLink href="https://play.google.com/store/apps/details?id=com.glapp.house">Pinte Casas</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem>
                        <NavLink href="https://play.google.com/store/apps/details?id=com.domino.duelo">Dominó: Duelo Online</NavLink>
                    </NavItem>
                </DropdownItem>
                <DropdownItem>
                    <NavItem>
                        <NavLink href="/Enigmas-da-escuridao">Enigmas da Escuridão</NavLink>
                    </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret >
                Outros
              </DropdownToggle>
              <DropdownMenu right dark>
                <DropdownItem>
                    <NavItem >
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
            </Nav>
        </Collapse>
        </Navbar>
        </>
    );
}