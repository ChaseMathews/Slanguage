import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'react-router-dom'


export default function NavBar() {
  return (
//   <Nav>
  

//   <Nav.Item>
//     <Nav.Link href="/">My Language App</Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link href="link-1">My Progress</Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link href="/">Sign Out</Nav.Link>
//   </Nav.Item>
  
// </Nav>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand className="text" href="/">My Language App</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="link-1">My Progress</Nav.Link>
      <Nav.Link href="link-1">My Profile</Nav.Link>
      <Nav.Link href="/">Sign Out</Nav.Link>
    </Nav>
  </Navbar>
  )
}