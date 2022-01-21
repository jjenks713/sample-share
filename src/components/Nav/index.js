import React, { useState } from 'react';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import './style.css'
import { Link } from "react-router-dom";




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
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal show={show1} onHide={handleClose1}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>A second modal, does it work</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose1}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose1}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
    )
}

export default Navigator;
