import React, { useState, useEffect } from "react";
import { Button, Card, Col, Form, Row, Table, Spinner } from "react-bootstrap";
import RowTable from "./RowTable";
import { useHistory } from "react-router-dom";
import { useDataStoreContext } from "../utils/context";
import {
  getIndicatorsID,
  transformeDataPeriod,
  tableDataByPeriod,
  tableDataByOrgunit,
  transformeDataOrgunit,
} from "../services/DataScoreCard";
import DataTablePeriod from "../data/DataTablePeriod.json";
import DataTableOrgunit from "../data/DataTableOrgunit.json";
import { scorecardColor } from "../services/ScoreCardColor";
import ScoreTablePeriod from "./ScoreTablePeriod";
import ScoreTableOrgunit from "./ScoreTableOrgunit";

const ScoreTable = ({ orgUnit, level }) => {
  const [tablePeriode, setTablePeriod] = useState();
  const [tableOrgunit, setTableOrgunit] = useState();
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const history = useHistory();
  const dataStore = useDataStoreContext(); //Context wrapped

  const getTablePeriodData = async () => {
    setIsLoading1(false);
    let listIndId = await getIndicatorsID(dataStore);
    let id = orgUnit?.id;

    let dataInd = await tableDataByPeriod(listIndId, id);
    //console.log("=======dataInd========", JSON.stringify(dataInd));
    //dataInd = DataTablePeriod;

    if (dataInd !== undefined) {
      let tableData = await transformeDataPeriod(dataInd, dataStore);

      //await console.log("=======tableData========", JSON.stringify(tableData));
      setTablePeriod(tableData);
    }
    setIsLoading1(true);
  };

  const getTableOrgunitData = async () => {
    setIsLoading2(false);
    let listIndId = await getIndicatorsID(dataStore);
    let id = orgUnit?.id;
    let level = orgUnit?.level;
    let dataInd = await tableDataByOrgunit(listIndId, id, level);
    //console.log("=======Orgunit dataInd========", JSON.stringify(dataInd));
    //console.log("=======Orgunit dataInd========", JSON.stringify(DataTablePeriod));
    //dataInd = DataTableOrgunit;
    if (dataInd !== undefined) {
      let tableData = await transformeDataOrgunit(dataInd.data, dataStore);

      //await console.log("====Org tableData=======", JSON.stringify(tableData));
      setTableOrgunit(tableData);
    }

    setIsLoading2(true);
  };

  useEffect(() => {
    (async () => {
      if (orgUnit !== undefined) {
        await getTablePeriodData();
        await getTableOrgunitData();
      }
    })();
  }, [orgUnit]);

  return (
    <>
      {isLoading1 ? (
        <ScoreTablePeriod
          tablePeriode={tablePeriode}
          level={level}
          orgUnitId={orgUnit?.id}
        />
      ) : (
        <Row>
          <Col>
            <Spinner animation="border" variant="success" />
            Loading...
          </Col>
        </Row>
      )}

      {isLoading2 ? (
        <ScoreTableOrgunit
          tableOrgunit={tableOrgunit}
          level={level}
          orgUnitId={orgUnit?.id}
        />
      ) : (
        <Row>
          <Col>
            <Spinner animation="border" variant="success" />
            Loading...
          </Col>
        </Row>
      )}
    </>
  );

  /* if (tablePeriode !== undefined) {
    return (
      <Card style={{ margin: "1rem" }}>
        <Card.Header as="h3">
          Mapping DHIS Data Elements / Indicators
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Table striped bordered hover responsive>
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
      <Row>
        <Col>
          <Spinner animation="border" variant="success" />
          Loading...
        </Col>
      </Row>
    );
  } */
};

export default ScoreTable;
