import React, { useRef, useState } from "react";
import { useDataStoreContext } from "../utils/context";
import { Button, Card, Col, Form, Row, Table, Spinner } from "react-bootstrap";
import { scorecardColor } from "../services/ScoreCardColor";
import { useEffect } from "react";
import { getOrgUnitById } from "../services/FecthingData";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import { FaFileExport, FaTable } from "react-icons/fa";

const ScoreTablePeriod = ({ tablePeriode, level, orgUnitId }) => {
  const [titre, setTitre] = useState();
  const dataStore = useDataStoreContext(); //Context wrapped
  const scorePeriodRef = useRef();
  useEffect(() => {
    (async () => {
      getOrgUnitById(orgUnitId).then((orgUnit) => {
        setTitre(level?.name + " " + orgUnit.name);
      });
    })();
  }, [level, orgUnitId]);

  if (tablePeriode !== undefined) {
    return (
      <Card style={{ margin: "1rem" }}>
        <Card.Header as="h3">
          <FaTable /> Evaluation table of {titre} over the last 12 months
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-center">
            <Button
              variant="primary"
              onClick={() => exportComponentAsJPEG(scorePeriodRef)}
            >
              <FaFileExport /> Export As JPEG
            </Button>{" "}
            <Button
              variant="primary"
              onClick={() => exportComponentAsPNG(scorePeriodRef)}
            >
              <FaFileExport /> Export As PNG
            </Button>{" "}
            <Button
              variant="primary"
              onClick={() => exportComponentAsPDF(scorePeriodRef)}
            >
              <FaFileExport /> Export As PDF
            </Button>
          </Card.Title>

          <Card.Text>
            <Table striped bordered hover responsive ref={scorePeriodRef}>
              <thead>
                <tr>
                  {tablePeriode?.headers.map((elt, index) => (
                    <th key={index}>{elt}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tablePeriode?.lignes.map((ligne, index) => {
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

export default ScoreTablePeriod;
