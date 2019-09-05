import * as React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

interface State {
    email: string;
    password: string;
}

export class LoginView extends React.Component<{}, State> {
    public render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col md="8">
                            <div className="card-group">
                                <div className="card">
                                    <div className="card-body">
                                        <Form>
                                            <h2>Login</h2>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Login
                                            </Button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
