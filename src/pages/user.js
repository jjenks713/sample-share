import React, { useState } from 'react';
import Table from '../components/Table';
import { Container, Card, Button, Modal } from 'react-bootstrap';
import SubmitSound from '../components/SubmitSound';

function UserPage () {

    const [show1, setShow] = useState(false);
  
    const handleClose1 = () => setShow(false);
    const handleShow1 = () => setShow(true);


    return (
        <Container>

                <Card className="bg-light">
                    <Card.Img src="https://morning-scrubland-17473.herokuapp.com/assets/images/back-1-1.jpg" alt="Card image" />
                    <Card.ImgOverlay className="text-light">
                        <Card.Title>User Email</Card.Title>
                        <Card.Text>
                        Here you will find all the sounds that you have uploaded!
                        </Card.Text>
                        <Card.Text>User info</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card>
                <Card.Body>
                    <Card.Text>
                    <Button variant="dark" onClick={handleShow1}>Upload</Button>

                    </Card.Text>
                <Table></Table>

                    </Card.Body>
                </Card>



                <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload New Sound</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SubmitSound />
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default UserPage;