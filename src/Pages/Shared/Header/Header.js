import React from 'react';
import './Header.css'
import { Container,Button, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const logo = "https://i.ibb.co/QCT5tck/pngegg-7-1.png"

const Header = () => {
    const {user , logOut} = useAuth()
    return (
        <div className="container mt-5">
        <Navbar collapseOnSelect  fixed="top"  expand="lg" className="bg"  variant="light" >
            <Container>
            <Navbar.Brand href="#home" className="text-warning fw-bold">
                <img
                alt=""
                src={logo}
                width="70"
                height="60"
                className="d-inline-block pb-1 align-top"
                /> <br />
    
                <h3>Care Hospital Ltd.</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto">
                <Nav.Link className="text-dark nav  fw-bold" as={HashLink} to="/home">Home</Nav.Link>
                <Nav.Link className="text-dark nav fw-bold" as={HashLink} to="/services">Services</Nav.Link>
                <Nav.Link className="text-dark nav fw-bold" as={HashLink} to="/onlinedoctor">Online-Services</Nav.Link>
                <Nav.Link className="text-dark nav fw-bold" as={HashLink} to="/foreigndoctors">Foreign Doctors</Nav.Link>
                <Nav.Link className="text-dark nav fw-bold" as={HashLink} to="/about">About Us</Nav.Link>
                </Nav>
                
                    {
                    user.email ?   <button className="btn btn-danger" onClick={logOut}>Log Out</button> : 
                        <div>
                            <Link className="login-button" to="/login">Login</Link>
                            <Link to="/register"><Button className="ms-3 fw-bold rounded-pill" variant="outline-info">Sign Up</Button></Link>
                        </div>
                    }
                <Navbar.Text>
                <img className="header-img"  src={user?.photoURL} alt="" />
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;