import React from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

import Home from './Home'

function Header() {
  return (
    <div>
        <>
        <Navbar bg='dark' variant='dark'>
           <Container>
           <Navbar.Brand ></Navbar.Brand>
                <Nav className='me-auto' >
                 
                    <Nav.Link as={Link} to='/Home'>Home</Nav.Link>
                    {/* <Nav.Link as={Link} to='/all'>All</Nav.Link> */}
                    <Nav.Link as={Link} to='/Contact'>Contact</Nav.Link>  
                    <Nav.Link as={Link} to='/users/add'>Add Employee</Nav.Link>  
                </Nav>
           </Container>
        </Navbar>
        </>
    </div>
  )
}

export default Header