import React, { useState } from 'react';
import { Navbar, Nav, Button, Modal, Form, CloseButton } from 'react-bootstrap';
import './style.css'
import { Link } from "react-router-dom";
import SignInModal from '../SignInModal';
import SignUpModal from '../SignUpModal';




function Navigator () {

        const [show, setShow] = useState(false);
        const [show1, setShow1] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const handleClose1 = () => setShow1(false);
        const handleShow1 = () => setShow1(true);
              
      
    return (
        <div>
            <Navbar className='navigator' bg="dark" expand="lg">
                <Navbar.Brand as={Link} className='navName' to='/'>Samplified</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link onClick={handleShow} >Sign in</Nav.Link>
                    <Nav.Link onClick={handleShow1}>Sign Up</Nav.Link>
                    <Nav.Link as={Link} to="/sounds">Sounds</Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <>
      
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Sign in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <SignInModal/>
            </Modal.Body>
            </Modal>

            <Modal show={show1} onHide={handleClose1}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <SignUpModal />
              </Modal.Body>
            </Modal>
          </>
        </div>
    )
}

export default Navigator;
