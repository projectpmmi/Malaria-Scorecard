import React, { useContext, useState } from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { getListOrgUnit } from "../services/FecthingData";
import Select from "react-select";
import { LevelContext, StoreLevelContext } from "../utils/context";
import { useEffect } from "react";
import { GrSelect } from "react-icons/gr";

const ChooseOrgUnit = ({ getOrgUnit }) => {
  const [level, setLevel] = useState("");
  const [selectTypeOrgUnit, setSelectTypeOrgUnit] = useState(true);
  const [selectedOrgUnit, setSelectedOrgUnit] = useState(false);
  const [listOrgUnit, setListOrgUnit] = useState();
  const [listLevel, setListLevel] = useState([]);

  const levelList = useContext(LevelContext);
  const storeLevelList = useContext(StoreLevelContext);

  const setLevelWrapper = async (val) => {
    //console.log("========val verif=========", JSON.stringify(val));
    setSelectTypeOrgUnit(false);
    let selectedLevel = val != "Select value" ? JSON.parse(val) : null;
    if (selectedLevel != null) {
      setLevel(selectedLevel);
      setListOrgUnit();
      await getListOrgUnit(selectedLevel.level).then(async (list) => {
        let newList = await transformeList(list);
        //console.log("==========newList orgunit=======", JSON.stringify(newList));
        setListOrgUnit(newList);
      });
      setSelectTypeOrgUnit(true);
    }
    setSelectTypeOrgUnit(true);
  };

  const transformeList = async (listOrgUnit) => {
    var newList = [];
    listOrgUnit.map((item) => {
      var ind = new Object();
      ind.value = item.id;
      if (item?.parent?.parent) {
        ind.label =
          item.parent.parent.name +
          " - " +
          item.parent.name +
          " - " +
          item.name;
      } else if (item?.parent) {
        ind.label = item.parent.name + " - " + item.name;
      } else {
        ind.label = item.name;
      }
      /* ind.label = item?.parent
        ? item.parent.name + " - " + item.name
        : item.name; */
      newList.push(ind);
    });
    return newList;
  };

  const submit = () => {
    //console.log("=========je suis là 1=========", selectedOrgUnit);
    //console.log("=========je suis là 2=========", level?.level);
    getOrgUnit(selectedOrgUnit, level);
  };

  useEffect(() => {
    (async () => {
      //console.log("=========je suis ici=========", storeLevelList);
      let propertyValues = Object.values(storeLevelList);
      let filterListLevel = levelList.filter((elt) =>
        propertyValues.includes(elt.level)
      );
      setListLevel(filterListLevel);
    })();
  }, [levelList, storeLevelList]);

  return (
    <Card style={{ margin: "1rem" }}>
      <Card.Header as="h3">
        <GrSelect /> Select Organisation unit
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          {storeLevelList !== undefined ? (
            <Form>
              <Row>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>
                      Please select the organisational level to be displayed
                    </Form.Label>
                    <Form.Select
                      value={JSON.stringify(level)}
                      onChange={(e) => setLevelWrapper(e.target?.value)}
                    >
                      <option>Select value</option>
                      {listLevel.map((elt, index) => (
                        <option key={index} value={JSON.stringify(elt)}>
                          {elt.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>

                {selectTypeOrgUnit ? (
                  <>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>
                          Select {level ? level.name : ""}
                        </Form.Label>
                        <Select
                          defaultValue={selectedOrgUnit}
                          onChange={setSelectedOrgUnit}
                          options={listOrgUnit}
                          //isSearchable={true}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="submit"
                        onClick={() => submit()}
                        style={{ marginTop: "30px" }}
                      >
                        View
                      </Button>
                    </Col>
                  </>
                ) : (
                  <Col md={8}>
                    <br />
                    <Spinner animation="border" variant="success" />
                    Loading...
                  </Col>
                )}
              </Row>
            </Form>
          ) : (
            <Row>
              <Col>
                <Spinner animation="border" variant="success" />
                Loading...
              </Col>
            </Row>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ChooseOrgUnit;
