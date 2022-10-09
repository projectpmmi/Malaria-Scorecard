import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { FaEdit, FaSave, FaWindowClose } from "react-icons/fa";
import { getIndicatorList, getDataElementList } from "../services/FecthingData";
import Select from "react-select";
import { useHistory } from "react-router-dom";

const RowTable = ({ index, ind, listGroups, updateRow }) => {
  const history = useHistory();
  const [cond, setCond] = useState(true);
  const [type, setType] = useState(ind.type);
  const [listIndicator, setListIndicator] = useState([]);
  const [selectedInd, setSelectedInd] = useState({
    value: ind.dhisID,
    label: ind.dhisName,
  });
  const [target, setTarget] = useState(ind.target);
  const [max, setMax] = useState(100);
  const [achieved, setAchiveved] = useState(ind.achieved);
  const [notInTrack, setNotInTrack] = useState(ind.notInTrack);
  const [isLoading, setIsLoading] = useState(true);

  const group = listGroups.filter((gpe) => gpe.code === ind.groupCode);

  const setTypeInd = async (e) => {
    setIsLoading(false);
    let selectType = e.target?.value;
    setType(selectType);
    if (selectType === "indicator") {
      let list = await getIndicatorList();
      //console.log("=======list indicator===",JSON.stringify(transforme(list.indicators)));
      setListIndicator(await transforme(list.indicators));
    } else if (selectType === "dataElement") {
      let list = await getDataElementList();
      //await console.log( "=======list DataElement======", JSON.stringify(transforme(list.dataElements)));
      setListIndicator(await transforme(list.dataElements));
    } else {
      setListIndicator([]);
    }
    setIsLoading(true);
  };

  const setTargetWrapper = (val) => {
    setTarget(val);
    if (val == 100) setMax(100);
    if (val == 100) setMax(1000);
  };

  const transforme = async (listIndicator) => {
    var newList = [];
    listIndicator.map((item) => {
      var ind = new Object();
      ind.value = item.id;
      ind.label = item.name;
      newList.push(ind);
    });
    return newList;
  };

  const onSubmit = async () => {
    ind.type = type;
    ind.target = target;
    ind.achieved = achieved;
    ind.notInTrack = notInTrack;
    ind.dhisID = selectedInd.value;
    ind.dhisName = selectedInd.label;
    //console.log("========ind verif========", ind);
    setCond(true);
    await updateRow(ind);
  };

  const onCancel = () => {
    //console.log("========cancel========");
    setCond(true);
    history.push("/admin");
  };

  if (cond) {
    return (
      <tr key={index}>
        <td>{group[0]?.name}</td>
        <td>{group[0]?.titre}</td>
        <td>{ind?.name}</td>
        <td>{ind?.type}</td>
        <td>{ind?.dhisName}</td>
        <td>{ind?.target}</td>
        <td>{ind?.achieved}</td>
        <td>{ind?.notInTrack}</td>
        <td>{ind?.formula}</td>
        <td>
          <Button onClick={() => setCond(false)} variant="warning">
            <FaEdit />
          </Button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr key={index}>
        <td>{group[0]?.name}</td>
        <td>{group[0]?.titre}</td>
        <td>{ind.name}</td>
        <td>
          <Form.Select
            value={type}
            onChange={(e) => setTypeInd(e)}
            className="mb-3"
          >
            <option>Select type</option>
            <option value="indicator">Indicator</option>
            <option value="dataElement">DataElement</option>
          </Form.Select>
        </td>
        <td>
          {isLoading ? (
            <Select
              defaultValue={selectedInd}
              onChange={setSelectedInd}
              options={listIndicator}
              styles={customStyles}
            />
          ) : (
            <>
              <Spinner animation="border" variant="success" size="lg" />
              Loading...
            </>
          )}
        </td>
        <td>
          <Form.Select
            value={target}
            onChange={(e) => setTargetWrapper(e.target?.value)}
          >
            <option>Select type</option>
            <option value={0}>0</option>
            <option value={100}>100</option>
            <option value={1000}>1000</option>
          </Form.Select>
        </td>
        <td>
          <Form.Control
            type="number"
            onChange={(e) => setAchiveved(e.target?.value)}
            max={max}
            value={achieved}
          />
        </td>
        <td>
          <Form.Control
            type="number"
            onChange={(e) => setNotInTrack(e.target?.value)}
            max={max}
            value={notInTrack}
          />
        </td>
        <td>{ind.formula}</td>
        <td>
          <Button variant="success" onClick={() => onSubmit()}>
            <FaSave />
          </Button>
          <Button variant="danger" onClick={() => onCancel()}>
            <FaWindowClose />
          </Button>
        </td>
      </tr>
    );
  }
};

const customStyles = {
  input: (provided) => ({
    ...provided,
    minHeight: "1px",
    width: "20px",
  }),
};

export default RowTable;
