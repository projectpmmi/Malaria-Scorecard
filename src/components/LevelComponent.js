import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const LevelComponent = ({ num, list, setValue, defaultLevels }) => {
  const [defautValue, setDefaultValue] = useState();
  const [valLevel, setValLevel] = useState();

  useEffect(() => {
    //console.log("==========default list=============", JSON.stringify(list));
    //console.log("==========default defaultLevels=============",JSON.stringify(defaultLevels));
    if (defaultLevels != undefined) {
      switch (num) {
        case 1:
          let val = list.filter((elt) => elt.level == defaultLevels[0].level1);
          //console.log("==========default val 1=============",JSON.stringify(val[0]));
          setDefaultValue(val[0]);
          break;
        case 2:
          let val2 = list.filter((elt) => elt.level == defaultLevels[0].level2);
          setDefaultValue(val2[0]);
          break;
        case 3:
          let val3 = list.filter((elt) => elt.level == defaultLevels[0].level3);
          setDefaultValue(val3[0]);
          break;
        case 4:
          let val4 = list.filter((elt) => elt.level == defaultLevels[0].level4);
          setDefaultValue(val4[0]);
          break;
        case 5:
          let val5 = list.filter((elt) => elt.level == defaultLevels[0].level5);
          setDefaultValue(val5[0]);
          break;
        case 6:
          let val6 = list.filter((elt) => elt.level == defaultLevels[0].level6);
          setDefaultValue(val6[0]);
          break;

        default:
          console.log("Pas de correspondance");
      }
    }
  }, [defaultLevels]);

  const valueWrapper = (e, num) => {
    let level = e.target?.value;
    setDefaultValue(JSON.parse(level));
    setValue(e, num);
  };

  return (
    <>
      <Col xs="auto">Level {num}</Col>
      <Col xs="auto">
        <Form.Select
          value={JSON.stringify(defautValue)}
          onChange={(e) => valueWrapper(e, num)}
        >
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
};

export default LevelComponent;
