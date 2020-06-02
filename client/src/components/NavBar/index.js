import React, { useContext, useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Modal } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import API from '../../utils/API';
import { UserContext } from '../../utils/Context';
import './style.css'
// import Modal from '../Modal/index';


export default function NavBar() {



  const { user, currentLang } = useContext(UserContext);

  const { lang } = useParams();

  const language = lang || currentLang

  const history = useHistory();

  const [modal, setModal] = useState(false);

  const deleteAccount = () => {
    API.deleteUser(user._id)
      .then(() => {
        console.log('Successfully deleted!');
        history.push("/");
      })
  }

  const signOut = () => {
    API.userLogOut()
      .then(() => {
        console.log("user logged out!")
        localStorage.clear();
      })
  }

  const [show, setShow] = useState(true);

  return (
    <>
      {modal &&

        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Account?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete your account?</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={deleteAccount}>
              Yes, please!
            </Button>
            <Button variant="success" onClick={() => setModal(false)}>
              No! ABORT!
            </Button>
          </Modal.Footer>
        </Modal>
      }

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="text">
          <Link to={"/DashboardCards/" + language}>
            <img src="https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/images/slanguagelogoFinal-02.png"
              width="120"
              height="40"
              alt="Slanguage logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to={"/DashboardCards/" + language} className="navbartext">My Dashboard</Link>
            <Link to="/About" className="navbartext">About</Link>
            <Link
              onClick={signOut}
              to="/"
              className="navbartext">
              Sign Out
            </Link>
          </Nav>
          <Nav>

            <NavDropdown title="Account Settings" id="collasible-nav-dropdown" className="navbartext">
              <NavDropdown.Item onClick={() => setModal(true)}>Delete account</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </>
  )
}