import React, { useState, useEffect } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { makeDataStore } from "../services/FecthingData";
import { useHistory } from "react-router-dom";
import LevelComponent from "./LevelComponent";
import { useContext } from "react";
import { LevelContext, useDataStoreContext } from "../utils/context";
import { MdLink } from "react-icons/md";

/* const levelComponent = (num, list, setValue) => {
  return (
    <>
      <Col xs="auto">Level {num}</Col>
      <Col xs="auto">
        <Form.Select onChange={(e) => setValue(e, num)}>
          <option>Select value</option>
          {list.map((elt, index) => (
            <option key={index} value={JSON.stringify(elt)}>
              {elt.name}
            </option>
          ))}
        </Form.Select>
      </Col>
    </>
  );
}; */

const MapOrgUnit = () => {
  const history = useHistory();
  const levels = useContext(LevelContext);
  const dataStore = useDataStoreContext();

  const range = (min, max) =>
    [...Array(max - min + 1).keys()].map((i) => i + min);
  const [bindLevel, setBindLevel] = useState([]);
  const [table, setTable] = useState([]);
  const [defaultLevels, setDefaultLevels] = useState();

  useEffect(() => {
    //console.log("je suis ici table", JSON.stringify(table));
    setTable(range(1, levels.length)); //get number of level
    //console.log("=====dataStore=====", JSON.stringify(dataStore));
    setDefaultLevels(dataStore?.orgUnitLevel);
  }, [levels, dataStore]);

  const setValue = (e, numLevel) => {
    //console.log("=========bindLevel===========", JSON.stringify(bindLevel));
    //console.log("=======value===========", e.target.value);
    let level = e.target?.value;
    setBindLevel((bindLevel) => [
      ...bindLevel,
      { scoreLevel: numLevel, dhisLevel: JSON.parse(level) },
    ]);
  };

  const submit = async () => {
    //console.log("=========bindLevel===========", JSON.stringify(bindLevel));
    let orgLevel = dataStore.orgUnitLevel[0];
    bindLevel.map((elt) => {
      switch (elt.scoreLevel) {
        case 1:
          orgLevel.level1 = elt.dhisLevel.level;
          break;
        case 2:
          orgLevel.level2 = elt.dhisLevel.level;
          break;
        case 3:
          orgLevel.level3 = elt.dhisLevel.level;
          break;
        case 4:
          orgLevel.level4 = elt.dhisLevel.level;
          break;
        case 5:
          orgLevel.level5 = elt.dhisLevel.level;
          break;
        case 6:
          orgLevel.level6 = elt.dhisLevel.level;
          break;
        default:
          console.log("Pas de correspondance");
      }
    });

    dataStore.orgUnitLevel[0] = orgLevel;
    //console.log("======dataStore====", JSON.stringify(dataStore.orgUnitLevel));

    await makeDataStore(dataStore);
    //history.push("/admin");
  };

  return (
    <Card style={{ margin: "1rem" }}>
      <Card.Header as="h3">
        <MdLink /> Mapping DHIS organisation unit level
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          <Form>
            <Row className="align-items-center">
              {console.log("teste du defaultLevels", JSON.stringify(table))}

              {table.map((i) => (
                <LevelComponent
                  num={i}
                  list={levels}
                  setValue={setValue}
                  defaultLevels={defaultLevels}
                />
              ))}

              <Col xs="auto">
                <Button type="submit" className="mb-2" onClick={() => submit()}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MapOrgUnit;
