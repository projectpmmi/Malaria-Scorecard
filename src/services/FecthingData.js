import { get, postData, deleteData, getData } from "../components/api/crud";

export const getLevel = async () => {
  try {
    let endpoint = "organisationUnitLevels.json?paging=false&fields=name,level";
    const response = await get(endpoint);
    //await console.log("====response=========",JSON.stringify(response.organisationUnitLevels));
    if (response.status === "ERROR") {
      console.error(response.message);
      return [];
    }
    return response.organisationUnitLevels;
  } catch (error) {
    console.error("level error ", error);
    return [];
  }
};

export const getDataStore = async () => {
  try {
    let endpoint = "dataStore/malariaSoreCardTest/indicator";
    const response = await getData(endpoint);

    if (response.status === "ERROR") {
      console.error(response.message);
      return;
    }
    //console.log("===========verif response store========", response);
    return response.data;
  } catch (error) {
    console.error("Data store get error ", error);
    return;
  }
};

export const postDataStore = async (scoreCardData) => {
  const endpoint = "dataStore/malariaSoreCardTest/indicator";
  try {
    //console.log("===========verif initial store========",JSON.stringify(scoreCardData));
    let respPost = await postData(endpoint, scoreCardData);
    if (respPost.status === "ERROR") {
      //console.error("Post dataStore error", respPost.message);
      return;
    }
  } catch (error) {
    console.error("Data store post error ", error);
    return [];
  }
};

export const makeDataStore = async (scoreCardData) => {
  const endpoint = "dataStore/malariaSoreCardTest/indicator";
  try {
    let respDelete = await deleteData(endpoint);
    let respPost = await postData(endpoint, scoreCardData);
    if (respDelete.status === "ERROR") {
      //console.error(respDelete.message);
      return;
    }
    if (respPost.status === "ERROR") {
      console.error(respPost.message);
      return;
    }
  } catch (error) {
    console.error("Data store make error ", error);
    return [];
  }
};

export const getIndicatorList = async () => {
  const endpoint = "indicators.json?paging=false&fields=id,name";
  try {
    const response = await getData(endpoint);

    if (response.status === "ERROR") {
      //console.error("=======get List indicator=========", response.message);
      return;
    }
    return response.data;
  } catch (error) {
    console.error("List indicator get error ", error);
    return;
  }
};

export const getDataElementList = async () => {
  const endpoint = "dataElements.json?paging=false&fields=id,name";
  try {
    const response = await getData(endpoint);

    if (response.status === "ERROR") {
      console.error("=======get List dataElement=========", response.message);
      return;
    }
    return response.data;
  } catch (error) {
    console.error("List dataElement get error ", error);
    return;
  }
};

export const getListOrgUnit = async (level) => {
  try {
    let endpoint = `organisationUnits.json?paging=false&fields=id,name,parent[id,name,parent[id,name]]&filter=level:eq:${level}`;
    const response = await getData(endpoint);
    //await console.log("=======response orgunit=========",JSON.stringify(response));
    if (response.status === "ERROR") {
      console.error(response.message);
      return;
    }
    return response.data.organisationUnits;
  } catch (error) {
    console.error("Data store get error ", error);
    return;
  }
};

export const getOrgUnitById = async (id) => {
  try {
    let endpoint = `organisationUnits.json?paging=false&fields=id,name,parent[id,name]&filter=id:eq:${id}`;
    const response = await getData(endpoint);
    //await console.log("=======response orgunit=========",JSON.stringify(response));
    if (response.status === "ERROR") {
      console.error(response.message);
      return;
    }
    return response.data.organisationUnits[0];
  } catch (error) {
    console.error("Data store get error ", error);
    return;
  }
};
