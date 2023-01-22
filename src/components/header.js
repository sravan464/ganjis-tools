import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "../logo.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="../ganjis-tools.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Ganji's Tools
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
