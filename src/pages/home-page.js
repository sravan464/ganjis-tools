import { Col, Container, Row } from "react-bootstrap";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import SideNav from "../components/side-nav";
import TaxReturns from "./tax-returns";

function HomePage() {
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Header />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="p-3" md={3}>
            <SideNav />
          </Col>
          <Col md={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
