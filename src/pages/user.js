import React, { useState } from 'react';
import Table from '../components/Table';
import { Container, Card, Button, Modal, Form, DropdownButton, InputGroup, Dropdown, FormControl } from 'react-bootstrap';

function UserPage () {

    const [show1, setShow] = useState(false);
  
    const handleClose1 = () => setShow(false);
    const handleShow1 = () => setShow(true);

    const checking = () => {
        console.log("what")
    }

    const genres = ["House", "Bass-Music", "EDM", "Pop", "Cinematic", "Hip-Hop", "Global", "Live"];
    const [genre, setGenre] = useState("");

    const instruments = ["FX", "Drums", "Vocals", "Percussion", "Guitar", "Bass", "Keys", "Strings", "Synth"];
    const [instrument, setInsturment] = useState("");

    const loros = ["Loop", "One-shot"];
    const [loro, setLoro] = useState("");


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
                    <Form>

                            <Form.Group className="mb-3" controlId="signUpUsername">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" placeholder="Name of Sample" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="signUpName">
                            <Form.Label></Form.Label>
                            <Form.Control type="name" placeholder="BPM" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="signUpLastName">
                            <Form.Label></Form.Label>
                            <Form.Control type="name" placeholder="Key" />
                            </Form.Group>


                            <Form.Label htmlFor="genre">
                                Genre
                                <InputGroup>
                                <select
                                    id="genre"
                                    value={genre}
                                    onChange={e => setGenre(e.target.value)}
                                    onBlur={e => setGenre(e.target.value)}
                                    >
                                        <option></option>
                                        {
                                            genres.map(genre => (
                                                <option value={genre} key={genre}>
                                                    {genre}
                                                </option>
                                            ))
                                        }
                                </select>
                                </InputGroup>

                            </Form.Label>

                            <Form.Label htmlFor="instrument">
                                Instrument
                                <InputGroup>
                                <select
                                    id="instrument"
                                    value={instrument}
                                    onChange={e => setInsturment(e.target.value)}
                                    onBlur={e => setInsturment(e.target.value)}
                                    >
                                        <option></option>
                                        {
                                            instruments.map(instrument => (
                                                <option value={instrument} key={instrument}>
                                                    {instrument}
                                                </option>
                                            ))
                                        }
                                </select>
                                </InputGroup>

                            </Form.Label>

                            <Form.Label htmlFor="loop-oneshot">
                                Loop or One Shot
                                <InputGroup>
                                <select
                                    id="loro"
                                    value={loro}
                                    onChange={e => setLoro(e.target.value)}
                                    onBlur={e => setLoro(e.target.value)}
                                    >
                                        <option></option>
                                        {
                                            loros.map(loro => (
                                                <option value={loro} key={loro}>
                                                    {loro}
                                                </option>
                                            ))
                                        }
                                </select>
                                </InputGroup>

                            </Form.Label>



                            <Form.Group className="mb-3" controlId="signUpPassword">
                            <button>Choose File</button>
                            </Form.Group>

                            <Button variant="dark" type="submit">
                            Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default UserPage;