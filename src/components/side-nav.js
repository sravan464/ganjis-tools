import React, { useState } from "react";
import { Form, FormControl, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const SideNav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const pages = [
    { name: "TaxReturns", path: "/taxreturns" },
    { name: "JSON formatter", path: "/json-format" },
    { name: "JSON-to-TypeScript", path: "/json-ts" },
  ];
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
