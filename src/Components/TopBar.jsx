import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default function TopBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand style={{ margin: "5px 0 0 -1200px" }} href="#home">
                    <img
                        src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg"
                        alt="Instacart Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav style={{ padding: "0px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bold", display: "flex" }}>
                        <Nav.Link style={{ color: "#343538", fontSize: '14px', lineHeight: '20px', fontWeight: 'unset', textDecoration: 'none', marginLeft: 'auto', marginRight: '2rem' }} href="#LogIn">Log In</Nav.Link>
                       
                       <Button className="signUp-btn" style={{
                            height: '35px',
                            width: '90px',
                            fontSize: '15px',
                            backgroundColor: '#108910',
                            color: '#ffffff',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontWeight: 'bold',
                            margin: '-6px 16px',
                            borderStyle: 'none'
                        }} variant="warning">Sign up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}