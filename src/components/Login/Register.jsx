import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Register = () => {
  return (
    <Container className="p-5 mt-5">
      <Row className="d-flex justify-content-center">
        <Col md="7" className="mt-5">
          <h2 className="text-center">Register</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
              <p className="text-muted mb-1">You'll use this to log in.</p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Phone Number</Form.Label>
              <Form.Control className="number-input" type="tel" placeholder="Phone number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="login-80p mb-4 fw-bold" type="submit">
              CREATE ACCOUNT
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
