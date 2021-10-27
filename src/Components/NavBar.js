import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,Nav,Container } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="">Online Car Rental Company</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/create" >Create New Car</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    );
  }
   
  export default NavBar;