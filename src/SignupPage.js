import React from "react";
import { Container } from "react-bootstrap";
import SignUp from "./SignUp";
// import { Link } from "react-router-dom";
// import { Button, Modal } from "react-bootstrap";

const SignupPage = () => {
  return (
    <Container
      classMame="d-flex align-items-center justify-content-center"
      style={{
        minWidth: "200px",
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <SignUp />
      </div>
    </Container>
  );
};
export default SignupPage;
