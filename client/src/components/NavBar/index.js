import React, { useContext, useState } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import API from '../../utils/API';
import { UserContext } from '../../utils/Context';
import Modal from '../Modal/index';


export default function NavBar() {

  const { user, currentLang } = useContext(UserContext);

  // const { lang } = useParams();
  console.log("navbar", currentLang);

  // const language = lang || currentLang

  const history = useHistory();

  const [modal, setModal] = useState(false);

  const deleteAccount = () => {
    API.deleteUser(user.id)
      .then(() => {
        console.log('Successfully deleted!');
        history.push("/");
      })

  }

  return (
    <>
      {modal &&
        <Modal>
          <h2>Are you sure you want to delete your account?</h2>
          <Button variant="danger" onClick={deleteAccount}>Yes, please!</Button>
          <Button variant="success" onClick={() => setModal(false)}>ABORT ABORT</Button>
        </Modal>
      }
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="text" href="/">
          <img src="https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/images/slanguagelogoFinal-02.png"
            width="120"
            height="40"
            alt="Slanguage logo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to={"/DashboardCards/" + currentLang}>My Dashboard</Link>
          <NavDropdown title="Account Settings" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => setModal(true)}>Delete account</NavDropdown.Item>
          </NavDropdown>
          <Link to="/About">About</Link>
          <Link to="/">Sign Out</Link>
        </Nav>
      </Navbar>
    </>
  )
}