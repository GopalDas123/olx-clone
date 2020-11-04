import React, { useRef } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword} = useAuth();
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setMessage('')
      setLoading(true);
      await resetPassword(emailRef.current.value)
      setMessage('Check Inbox')
    } catch {
      setError("Password Reset Failed");
    }
    setLoading(false);
  }

  return (
    <div
      className="w-100"
      style={{
        maxWidth: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop: "20px",
        flexDirection:'column',
      }}
    >
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <h2 className="text-center">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            

            <Button
              className="mt-2"
              type="submit"
              disabled={loading}
              style={{ width: "100%" }}
            >
              Reset Password{" "}
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-1 mb-4">
        <Link to="./login">

        Login Page 
        </Link>
        </div>
      </Card>
        <div className="w-100 text-center mt-3 mb-4">
          Don't Have An Account? <Link to="./signup">Sign Up</Link>
        </div>
    </div>
  );
}
