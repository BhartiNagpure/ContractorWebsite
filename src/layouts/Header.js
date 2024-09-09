// src/App.js
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrownButton from '../components/buttons/BrownBUtton';
import logo from '../assest/logo/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' col-12 d-flex align-items-center justify-content-center position-absolute '>
            <Navbar bg="transparent" expand="lg" className=" custom-navbar d-flex py-2 px-5 justify-content-center align-items-center ">
                <Navbar.Brand className='col-2'>
                    <NavLink to='/'><img alt='logo' src={logo} className='img-fluid' /></NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className=" col-10 d-flex justify-content-end align-items-center">
                    <Nav className="mr-auto d-flex align-items-center">
                        <NavLink
                            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                            to="/">Home</NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                            to="/services">Services</NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                            to="/portfolio">Portfolio</NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                            to="/about">About Us</NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
                            to="/contact">Contact</NavLink>
                    </Nav>
                    <div style={{ marginLeft: '2rem' }}>
                        <BrownButton backgroundColor='#4F1000' color='#FFFFFF'>Get In Touch</BrownButton>
                    </div>
                </Navbar.Collapse>
            </Navbar>

        </div >
    );
};

export default Header;
