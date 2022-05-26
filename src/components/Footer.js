import { Nav, NavLink, NavItem, NavbarBrand, NavbarToggler, Collapse, Navbar } from 'reactstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/footer.module.scss'


export default function Footer() {
    return (
        <>
            <div className={style.container}>
                <h1 className={style.h1}>George Lucas Dev</h1>
            </div>
        </>
    );
}