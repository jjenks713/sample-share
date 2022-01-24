import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

function SubmitSound () {

    const genres = ["House", "Bass-Music", "EDM", "Pop", "Cinematic", "Hip-Hop", "Global", "Live"];
    const [genre, setGenre] = useState("");

    const instruments = ["FX", "Drums", "Vocals", "Percussion", "Guitar", "Bass", "Keys", "Strings", "Synth"];
    const [instrument, setInsturment] = useState("");

    const loros = ["Loop", "One-shot"];
    const [loro, setLoro] = useState("");

    return (
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
    )
}

export default SubmitSound;