import React, { useRef } from "react";
import { Card, Form, Button, Modal, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmedRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = React.useState("");
  const [loginn, setLoginn] = React.useState("");
  const [loading, setLoading] = React.useState(false);


  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmedRef.current.value) {
      return setError("Passwords Don't Match");
    }
    try {
      setError("");
      setLoginn("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      emailRef.current.value = "";
      passwordRef.current.value = "";
      passwordConfirmedRef.current.value = "";
      setLoginn("Signup Completed Goto Login Page");
    } catch {
      setError("Failed To Create Account or Account Already Exists");
    }

    setLoading(false);
  }

  return (
    <>
      <div
        className="w-100"
        style={{ maxWidth: "400px", display: "flex", flexDirection: "column" }}
      >
        <Card>
          <Card.Body style={{ marginTop: "-10px" }}>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {loginn && <Alert variant="primary">{loginn}</Alert>}
            <Form onSubmit={handleSubmit} style={{ marginTop: "-6px" }}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmedRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Button
                type="submit"
                disabled={loading}
                style={{ width: "100%" }}
              >
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Card style={{ marginTop: "10px" }}>
          <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
            <Button
              style={{ marginBottom: "5px", width: "100%" }}
              variant="danger"
            >
              SIGNUP WITH GOOGLE
            </Button>
            <Button
              style={{ marginBottom: "1px", width: "100%" }}
              variant="primary"
            >
              SIGNUP WITH FACEBOOK
            </Button>
          </Modal.Body>
        </Card>

        <div className="w-100 text-center mt-2">
          Already Have An Account? <Link to="./login">Login</Link>{" "}
        </div>
      </div>
    </>
  );
}
