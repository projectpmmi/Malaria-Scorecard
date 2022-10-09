import React from "react";
import { useState } from "react";

import ChooseOrgUnit from "../components/ChooseOrgUnit";
import ScoreTable from "../components/ScoreTable";
import { Col, Row, Spinner } from "react-bootstrap";

const ScoreCard = () => {
  const [orgUnit, setOrgUnit] = useState();
  const [level, setLevel] = useState();
  const [isLoading, setIsLoading] = useState();
  const getOrgUnit = (orgUnit, level) => {
    setIsLoading(false);
    //console.log("========verif2 orgUnit=====", orgUnit);
    //console.log("========verif 2 level=====", level);
    setOrgUnit({ id: orgUnit.value, level: level?.level });
    setLevel(level);
    setIsLoading(true);
  };
  return (
    <>
      {console.log("======nombre======")}
      <ChooseOrgUnit getOrgUnit={getOrgUnit} />

      {isLoading ? (
        <ScoreTable orgUnit={orgUnit} level={level} />
      ) : (
        <Row>
          <Col></Col>
        </Row>
      )}
    </>
  );
};

export default ScoreCard;
