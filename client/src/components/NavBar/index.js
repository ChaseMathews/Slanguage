import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'react-router-dom'


export default function NavBar() {
  return (  
<Navbar bg="dark" variant="dark">
    <Navbar.Brand className="text" href="/">Slanguage</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="link-1">My Dashboard</Nav.Link>
      <Nav.Link href="link-1">Account Settings</Nav.Link>
      <Nav.Link href="/">Sign Out</Nav.Link>
    </Nav>
  </Navbar>
  )
}