import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const MyNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            {" "}
            BackCountry Real Esate
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">For Sell</Nav.Link>
              <Nav.Link href="/apply">Application</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;