import React, { useContext, useEffect, useRef, useState } from "react";
import { LevelContext, useDataStoreContext } from "../utils/context";
import { Button, Card, Col, Form, Row, Table, Spinner } from "react-bootstrap";
import { scorecardColor } from "../services/ScoreCardColor";
import { getOrgUnitById } from "../services/FecthingData";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import { FaFileExport, FaTable } from "react-icons/fa";

const ScoreTableOrgunit = ({ tableOrgunit, level, orgUnitId }) => {
  const [titre, setTitre] = useState();
  const dataStore = useDataStoreContext(); //Context wrapped
  const levelDhis2 = useContext(LevelContext);
  const scoreOrgunitRef = useRef();

  useEffect(() => {
    (async () => {
      let orgUnit = await getOrgUnitById(orgUnitId);
      //console.log("=======levelDhis2====", JSON.stringify(levelDhis2));
      //console.log("=======level.id====", JSON.stringify(level));
      let s_id = level.level + 1;
      let sousLevel = levelDhis2.filter((elt) => elt.level === s_id);
      //console.log("=======sousLevel====", JSON.stringify(sousLevel));
      sousLevel = sousLevel !== [] ? sousLevel : [level];
      setTitre(
        sousLevel[0]?.name + " in the " + orgUnit.name + " " + level?.name
      );
    })();
  }, [level, orgUnitId]);

  if (tableOrgunit !== undefined) {
    return (
      <Card style={{ margin: "1rem" }}>
        <Card.Header as="h3">
          <FaTable /> Evaluation table of {titre} over the last 12 months
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-center">
            <Button
              variant="primary"
              onClick={() => exportComponentAsJPEG(scoreOrgunitRef)}
            >
              <FaFileExport /> Export As JPEG
            </Button>{" "}
            <Button
              variant="primary"
              onClick={() => exportComponentAsPNG(scoreOrgunitRef)}
            >
              <FaFileExport /> Export As PNG
            </Button>{" "}
            <Button
              variant="primary"
              onClick={() => exportComponentAsPDF(scoreOrgunitRef)}
            >
              <FaFileExport /> Export As PDF
            </Button>
          </Card.Title>
          <Card.Text>
            <Table striped bordered hover responsive ref={scoreOrgunitRef}>
              <thead>
                <tr>
                  {tableOrgunit?.headers.map((elt, index) => (
                    <th key={index}>{elt}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableOrgunit?.lignes.map((ligne, index) => {
                  const nameInd = ligne[0];
                  return (
                    <tr key={index}>
                      {ligne.map((elt, cellIndex) => {
                        let backgroundColor = scorecardColor(
                          nameInd,
                          elt,
                          dataStore
                        );
                        if (cellIndex == 0) {
                          return (
                            <td style={{ backgroundColor: "#fff" }}>{elt}</td>
                          );
                        } else {
                          return <td style={backgroundColor}>{elt}</td>;
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Card style={{ margin: "1rem" }}>
        <Card.Header as="h3">
          Mapping DHIS Data Elements / Indicators
        </Card.Header>
        <Card.Body>
          <Card.Text> Aucune donnée</Card.Text>
        </Card.Body>
      </Card>
    );
  }
};

export default ScoreTableOrgunit;
