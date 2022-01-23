import React, { useState } from 'react';
import { Navbar, Nav, Button, Modal, Form, CloseButton } from 'react-bootstrap';
import './style.css'
import { Link } from "react-router-dom";
/* import SignInModal from '../';
 */



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
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
            </Modal>

            <Modal show={show1} onHide={handleClose1}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>

                    <Form.Group className="mb-3" controlId="signUpUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="password" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signUpName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="name" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signUpLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="name" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signUpEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signUpPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
              </Modal.Body>
              <Modal.Footer>

              </Modal.Footer>
            </Modal>
          </>
        </div>
    )
}

export default Navigator;
