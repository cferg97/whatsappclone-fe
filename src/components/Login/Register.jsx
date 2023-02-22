import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { registerUserAction } from "../redux/actions";
import { useDispatch } from "react-redux";


const Register = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const userForm = {
    userName: username,
    phone: phone,
    email: email,
    password: password
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(registerUserAction(userForm))
  }


  return (
    <Container className="p-5 mt-5">
      <Row className="d-flex justify-content-center">
        <Col md="7" className="mt-5">
          <h2 className="text-center">Register</h2>
          <Form onSubmit={(e) => onSubmitHandler(e)}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Username</Form.Label>
              <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
              <p className="text-muted mb-1">You'll use this to log in.</p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Phone Number</Form.Label>
              <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} className="number-input" type="tel" placeholder="Phone number" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
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
