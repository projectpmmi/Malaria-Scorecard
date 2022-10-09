import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Breadcrumb, Nav } from "react-bootstrap";

const Content = () => {
  return (
    <Container fluid="true">
      <Row>
        <Col>
          <Breadcrumb>
            <Nav variant="pills" defaultActiveKey="#/dashboard">
              <Nav.Item>
                <Nav.Link href="#/admin">Administration</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/dashboard" eventKey="link-1">
                  Dashboard
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
