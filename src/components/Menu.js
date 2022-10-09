import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container, Navbar, Image } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" className="justify-content-begin">
          <Image
            src="logo.png"
            alt="Malaria ScoreCard"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav
          variant="pills"
          defaultActiveKey="#/admin"
          className="justify-content-end"
        >
          <Nav.Item>
            <Nav.Link href="#/scorecard" eventKey="link-1">
              ScoreCard
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#/admin">Administration</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;
