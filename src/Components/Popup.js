import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Navbar.css";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Example() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="sell__btn" onClick={() => setShow(true)}>
        <GoPlus className="add__icon" />
        SELL
      </button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <Link to="./register" style={{ width: "100%" }}>
            <Button
              style={{ marginBottom: "3px", width: "100%" }}
              variant="success"
            >
              EMAIL
            </Button>
          </Link>
          {/* <Link to="./register" style={{}}> */}
          <Button
            style={{ marginBottom: "3px", width: "100%" }}
            variant="primary"
          >
            FACEBOOK
          </Button>
          {/* </Link> */}
          <Button
            style={{ marginBottom: "3px", width: "100%" }}
            variant="danger"
          >
            GOOGLE
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

// render(<Example />);
