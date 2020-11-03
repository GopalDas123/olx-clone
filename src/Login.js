import React, { useRef } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed To Login");
    }
    setLoading(false);
  }

  return (
    <div className="w-100" style={{ maxWidth: "400px",display:'flex',justifyContent:'center',alignItems:'center',margin:'auto',marginTop:'20px' }}>
      <Card style={{width:'100%'}}>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>

            <Button className='mt-2' type="submit" disabled={loading} style={{ width: "100%" }}>
              Login{" "}
            </Button>
          </Form>
        </Card.Body>
      <div className="w-100 text-center mt-1 mb-4">Don't Have An Account?<Link to='./signup'>
            Sign Up
      </Link></div>
        
      </Card>
    </div>
  );
}
