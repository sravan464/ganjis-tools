import React, { useState } from "react";
import { Form, FormControl, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const SideNav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const pages = [{ name: "TaxReturns", path: "/taxreturns" }];
  const filteredPages = pages.filter((page) =>
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Form>
        <FormControl
          type="text"
          placeholder="Search pages"
          className="mb-3"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
      <Nav className="flex-column">
        {filteredPages.map((page, index) => (
          <Nav.Link>
            <Link key={index} to={page.path}>
              {page.name}
            </Link>
          </Nav.Link>
        ))}
      </Nav>
    </>
  );
};

export default SideNav;

{
  /* <Nav className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav> */
}
