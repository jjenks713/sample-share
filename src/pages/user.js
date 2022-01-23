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

    const genres = ["House", "Bass-Music", "EDM", "Pop", "Cinematic", "Hip-Hop", "Global", "Live"]
    const [genre, setGenre] = useState("");


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


                            <label htmlFor="genre">
                                genre
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
                            </label>
                            <Form.Group htmlFor="genre">
                            <Form.Label>Genre</Form.Label>
                            <InputGroup>
                                    <DropdownButton
                                    variant="outline-secondary"
                                    title="Genre"
                                    id="input-group-dropdown-1"
                                    >
                                    <Dropdown.Item >House</Dropdown.Item>
                                    <Dropdown.Item >Bass-Music</Dropdown.Item>
                                    <Dropdown.Item >EDM</Dropdown.Item>
                                    <Dropdown.Item >Pop</Dropdown.Item>
                                    <Dropdown.Item >Cinematic</Dropdown.Item>
                                    <Dropdown.Item >Hip-Hop</Dropdown.Item>
                                    <Dropdown.Item >Global</Dropdown.Item>
                                    <Dropdown.Item >Live</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item >Separated link</Dropdown.Item>
                                    </DropdownButton>
                                    <FormControl aria-label="Text input with dropdown button" />
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="signUpEmail">
                            <Form.Label>Instrument</Form.Label>
                            <InputGroup>
                                    <DropdownButton
                                    variant="outline-secondary"
                                    title="Instrument"
                                    id="input-group-dropdown-1"
                                    >
                                    <Dropdown.Item >House</Dropdown.Item>
                                    <Dropdown.Item >Bass-Music</Dropdown.Item>
                                    <Dropdown.Item >EDM</Dropdown.Item>
                                    <Dropdown.Item >Pop</Dropdown.Item>
                                    <Dropdown.Item >Cinematic</Dropdown.Item>
                                    <Dropdown.Item >Hip-Hop</Dropdown.Item>
                                    <Dropdown.Item >Global</Dropdown.Item>
                                    <Dropdown.Item >Live</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item >Separated link</Dropdown.Item>
                                    </DropdownButton>
                                    <FormControl aria-label="Text input with dropdown button" />
                                </InputGroup>
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="signUpEmail">
                            <Form.Label>Loop or One-Shot</Form.Label>
                            <InputGroup>
                                    <DropdownButton
                                    variant="outline-secondary"
                                    title="Loop or Oneshot"
                                    id="input-group-dropdown-1"
                                    >
                                    <Dropdown.Item >Loop</Dropdown.Item>
                                    <Dropdown.Item >One-shot</Dropdown.Item>
           
                                    <Dropdown.Divider />
                                    <Dropdown.Item >Separated link</Dropdown.Item>
                                    </DropdownButton>
                                    <FormControl aria-label="Text input with dropdown button" />
                                </InputGroup>
                            </Form.Group>

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