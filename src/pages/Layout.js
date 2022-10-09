import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Content from "../components/App/Content";
import Menu from "../components/Menu";
import { DataContextProvider } from "../utils/context";
import Administration from "./Administration";
import ScoreCard from "./ScoreCard";

export const Layout = (props) => {
  return (
    <Container fluid="true">
      <Row>
        <Col>
          <Menu />
        </Col>
      </Row>
      <Row>
        <Col>
          <DataContextProvider>
            <HashRouter>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/admin" />} />
                <Route
                  path="/admin"
                  render={(props) => <Administration {...props} />}
                />
                <Route
                  path="/scorecard"
                  render={(props) => <ScoreCard {...props} />}
                />
              </Switch>
            </HashRouter>
          </DataContextProvider>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
