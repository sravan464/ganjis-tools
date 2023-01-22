import React from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../ganji-tools-logo.png";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                alt="Ganji's Tools"
                src={logo}
                height="75"
                className="d-inline-block align-top"
                href
              />
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
