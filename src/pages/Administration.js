import React, { useEffect, useState, useContext } from "react";
import MapOrgUnit from "../components/MapOrgUnit";
import {
  getLevel,
  getDataStore,
  postDataStore,
} from "../services/FecthingData";
import InitialDataStore from "../data/DatastoreData.json";
import AdminTable from "../components/AdminTable";
import { Spinner, Row, Col } from "react-bootstrap";

const Administration = () => {
  //const [levels, setLevels] = useState([]);
  //const [storeData, setStoreData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /* const getLevels = async () => {
    let resp = await getLevel();

    if (resp !== undefined) setLevels(resp);
    //console.log("=============", resp);
  };

  const getStoreData = async () => {
    let resp = await getDataStore();
    //console.log("======getStoreData=======", JSON.stringify(resp));
    if (resp === undefined) {
      await postDataStore(InitialDataStore).then(async () => {
        let data = await getDataStore();
        setStoreData(data);
      });
    } else {
      setStoreData(resp);
    }
  }; */

  /* useEffect(async () => {
    setIsLoading(false);
    //console.log("je suis là");
    //await getLevels();
    //await getStoreData();
    setIsLoading(true);
  }, []); */
  return (
    <>
      <MapOrgUnit />
      <AdminTable />
      {/* isLoading ? (
        <>
          <MapOrgUnit />
          <AdminTable />
        </>
      ) : (
        <Row className="justify-content-md-center">
          <Col>
            <Spinner animation="border" variant="success" size="lg" />
            Loading...
          </Col>
        </Row>
      ) */}
    </>
  );
};

export default Administration;
