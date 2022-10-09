import React, { useState, useEffect } from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import { makeDataStore } from "../services/FecthingData";
import RowTable from "./RowTable";
import { useHistory } from "react-router-dom";
import { useDataStoreContext } from "../utils/context";
import { MdAddLink } from "react-icons/md";

const AdminTable = () => {
  const history = useHistory();
  const dataStore = useDataStoreContext(); //Context wrapped

  const updateRow = async (ind) => {
    const listIndicators = [];
    await dataStore.indicators.map((indicator) => {
      if (indicator.name === ind.name) {
        listIndicators.push(ind);
      } else {
        listIndicators.push(indicator);
      }
    });

    dataStore.indicators = listIndicators;

    //await console.log("=========dataStore.indicators==========",JSON.stringify(dataStore.indicators));

    await makeDataStore(dataStore);
    history.push("/admin");
  };

  return (
    <Card style={{ margin: "1rem" }}>
      <Card.Header as="h3">
        <MdAddLink /> Mapping DHIS Data Elements / Indicators
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Group</th>
                <th>Titre</th>
                <th>Indicator</th>
                <th>Type</th>
                <th>Data Element / Indicator</th>
                <th>Target</th>
                <th>achieved</th>
                <th>Not in Track</th>
                <th>The formula</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dataStore?.indicators?.map((ind, index) => (
                <RowTable
                  index={index}
                  ind={ind}
                  listGroups={dataStore.indicatorGroup}
                  updateRow={updateRow}
                />
              ))}
            </tbody>
          </Table>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AdminTable;
