import { Button, Form } from 'react-bootstrap';


function SignInModal() {

    return (
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
        <Button variant="dark" type="submit">
        Submit
        </Button>
        </Form>

    )
}

export default SignInModal;

