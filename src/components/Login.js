import React from "react";
import "../styles/Navbar.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';



function Login(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6} id="col">

                        <Form>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" onChange={props.onChange} />

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" onChange={props.onChange} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={props.onSubmit}>
                                Log in
  </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>


    );
}

export default Login;



