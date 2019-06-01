import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/Nav';
import LinkContainer from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MainPage from '../Views/MainPage';
import About from '../Views/About';
import Blog from '../Views/Blog';

class Navigation extends Component {
    render(){
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home">Humpback Company</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Nav className="mr-auto">
                        <LinkContainer to="/"><Nav.Link href="/">Home</Nav.Link></LinkContainer>
                        <LinkContainer to="about"><Nav.Link href="about">About</Nav.Link></LinkContainer>
                        <LinkContainer to="blog"><Nav.Link href="blog">Blog</Nav.Link></LinkContainer>
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="sign-in">Sign In</NavDropdown.Item>
                        <NavDropdown.Item href="my-account">My Account</NavDropdown.Item>
                        <NavDropdown.Item href="preferences">Preferences</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="eggy-stats">Game - Eggy</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;