import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'react-router-dom'


export default function NavBar() {
  return (  
<Navbar bg="dark" variant="dark">
    <Navbar.Brand className="text" href="/">
      <img src="https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/images/slanguagelogoFinal-02.png"
      width="120"
      height="40"
      alt="Slanguage logo"
      />
      </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/Dashboard/Spanish">My Dashboard</Nav.Link>
      <Nav.Link href="link-1">Account Settings</Nav.Link>
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="/">Sign Out</Nav.Link>
    </Nav>
  </Navbar>
  )
}