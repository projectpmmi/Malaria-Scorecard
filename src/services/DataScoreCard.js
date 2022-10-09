import { get, postData, deleteData, getData } from "../components/api/crud";

export const getIndicatorsID = async (DatastoreData) => {
  //console.log("===========DatastoreData=========="+JSON.stringify(DatastoreData))
  var elements = DatastoreData?.indicators;
  //console.log("===========elements=========="+JSON.stringify(elements))
  var listUID = "";
  elements.map((item) => {
    if (!listUID?.includes(item.uid)) {
      listUID = listUID === "" ? item.dhisID : listUID + ";" + item.dhisID;
    }
  });
  //console.log("===========listUID==========" + listUID);
  return listUID;
};

export const tableDataByPeriod = async (listUID, uidOU) => {
  //console.log("===========uidOU graph==========" + uidOU);
  //console.log("===========listUID graph==========" + listUID);

  var endpoint =
    "analytics.json?dimension=pe:LAST_12_MONTHS&dimension=dx:" +
    listUID +
    "&rows=dx&columns=pe&displayProperty=NAME&showHierarchy=true&hideEmptyColumns=false&&filter=ou:" +
    uidOU +
    "&hideEmptyRows=true&ignoreLimit=true&tableLayout=true";
  //console.log("===========period endpoint==========" + endpoint);

  try {
    const response = await get(endpoint);
    //await console.log("====period response=========", JSON.stringify(response));
    if (response.status === "ERROR") {
      console.error(response.message);
      return;
    }
    return response;
  } catch (error) {
    console.error("period score ", error);
    return;
  }
};

export const transformeDataPeriod = async (data, dataStore) => {
  //console.log("Data", data);
  let headers = ["Indicators"];
  let lignes = [];
  let periods = data.metaData.dimensions.pe;

  await periods.map((elt) => {
    let pe = data.metaData.items[elt];
    headers.push(pe.name);
  });
  console.log("headers", JSON.stringify(headers));

  await data.rows.map((elt) => {
    //console.log("====dataStore.indicators=====",JSON.stringify(dataStore.indicators));
    //console.log("======elt=====", JSON.stringify(elt));
    let list = dataStore.indicators.filter(
      (ind) => ind.dhisID.trim() == elt[0].trim()
    );
    //console.log("list", JSON.stringify(list));
    let ligne = [list[0]?.name.trim()];
    //console.log("ligne", JSON.stringify(ligne));
    for (var i = 4, c = elt.length; i < c; i++) {
      ligne.push(elt[i]);
    }
    lignes.push(ligne);
  });

  console.log("lignes", JSON.stringify(lignes));

  let tableData = new Object();
  tableData.headers = headers;
  tableData.lignes = lignes;

  //console.log("=======Periode tableData=====", JSON.stringify(tableData));

  return tableData;
};

export const tableDataByOrgunit = async (listUID, uidOU, lev) => {
  //console.log("===========uidOU org==========" + uidOU);
  //console.log("===========listUID org==========" + listUID);
  //console.log("===========listUID lev==========" + lev);

  var endpoint =
    "analytics.json?dimension=ou:" +
    uidOU +
    ";LEVEL-" +
    (lev + 1) +
    "&dimension=dx:" +
    listUID +
    "&rows=dx&columns=ou&displayProperty=NAME&showHierarchy=true&hideEmptyColumns=true&filter=pe:LAST_12_MONTHS&hideEmptyRows=true&ignoreLimit=true&tableLayout=true";
  console.log("===========endpoint orgunit==========" + endpoint);

  try {
    const response = await getData(endpoint);
    //await console.log("====orgunit response=========",JSON.stringify(response));
    if (response.status === "ERROR") {
      console.error(response.message);
      return;
    }
    return response;
  } catch (error) {
    console.error("orgunit score error ", error);
    return;
  }
};

export const transformeDataOrgunit = async (data, dataStore) => {
  console.log("============Data===============", JSON.stringify(data));
  let headers = ["Indicators"];
  let lignes = [];
  let orgunits = data.metaData.dimensions.ou;
  let nbre_column = data.headerWidth - 2;

  let beginIndex =
    data.headerWidth > orgunits.length ? data.headerWidth - orgunits.length : 2;

  await orgunits.map((elt, index) => {
    if (index < nbre_column) {
      let ou = data.metaData.items[elt];
      headers.push(ou.name);
    }
  });
  console.log("========headers===============", JSON.stringify(headers));

  await data.rows.map((elt) => {
    let list = dataStore.indicators.filter(
      (ind) => ind.dhisID.trim() == elt[0].trim()
    );
    //console.log("list", JSON.stringify(list));
    let ligne = [list[0]?.name.trim()];
    //console.log("ligne", JSON.stringify(ligne));
    for (var i = beginIndex, c = elt.length; i < c; i++) {
      ligne.push(elt[i]);
    }
    lignes.push(ligne);
  });

  //console.log('lignes', JSON.stringify(lignes));

  let tableData = new Object();
  tableData.headers = headers;
  tableData.lignes = lignes;
  //console.log('tableData', JSON.stringify(tableData));

  return tableData;
};
