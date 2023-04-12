import { Nav, NavLink, NavItem, NavbarBrand, NavbarToggler, Collapse, Navbar } from 'reactstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../global.module.scss'


export default function Footer() {
    return (
        <>
            <div className={style.footer}>
                <h6 className={style.footertext}>George Lucas Dev | 2018 - 2023</h6>
            </div>
        </>
    );
}