import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useCallback,
} from "react";
import {
  getDataStore,
  getLevel,
  makeDataStore,
  postDataStore,
} from "../../services/FecthingData";
import InitialDataStore from "../../data/DatastoreData.json";

const DataStoreContext = createContext();
const LevelContext = createContext();
const StoreLevelContext = createContext();
const UpdateDataStoreContext = createContext();
const UpdateLevelContext = createContext();

const useDataStoreContext = () => {
  // get the context
  const context = useContext(DataStoreContext);
  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useUserContextState was used outside of its Provider");
  }
  return context;
};

const DataContextProvider = ({ children }) => {
  const [storeData, setStoreData] = useState([]);
  const [levelList, setLevelList] = useState([]);
  const [storeLevelList, setStoreLevelList] = useState([]);

  const getStoreData = async () => {
    let resp = await getDataStore();
    //console.log("======context dataStore=======", JSON.stringify(resp));
    let orgUnitLevel;
    if (resp === undefined) {
      await postDataStore(InitialDataStore).then(async () => {
        let data = await getDataStore();
        setStoreData(data);
        orgUnitLevel = data.orgUnitLevel[0];
        setStoreLevelList(orgUnitLevel);
      });
    } else {
      setStoreData(resp);
      orgUnitLevel = resp.orgUnitLevel[0];
      setStoreLevelList(orgUnitLevel);
    }

    let levelListDhis = await getLevel();
    console.log("======orgUnitLevel=======", JSON.stringify(orgUnitLevel));

    let propertyValues = Object.values(orgUnitLevel);

    /* let filterListLevel = levelListDhis.filter((elt) =>
      propertyValues.includes(elt.level)
    );

    filterListLevel =
      filterListLevel.length > 0 ? filterListLevel : levelListDhis;
    console.log("===filterListLevel====" + JSON.stringify(filterListLevel)); */

    let filterListLevel = levelListDhis;

    setLevelList(filterListLevel);
  };

  const updateIndicator = useCallback(
    async (ind) => {
      const listIndicators = [];
      await storeData.indicators.map((indicator) => {
        if (indicator.name === ind.name) {
          listIndicators.push(ind);
        } else {
          listIndicators.push(indicator);
        }
      });

      storeData.indicators = listIndicators;

      //await console.log( "=====context dataStore.indicators===",JSON.stringify(storeData));

      await makeDataStore(storeData);
    },
    [storeData]
  );

  const updateLevel = async (bindLevel) => {
    //console.log("=========context bindLevel===========",JSON.stringify(bindLevel));
    let orgLevel = storeData.orgUnitLevel[0];
    bindLevel.map((elt) => {
      switch (elt.scoreLevel) {
        case 1:
          orgLevel.level1 = elt.dhisLevel.level;
          break;
        case 2:
          orgLevel.level2 = elt.dhisLevel.level;
          break;
        case 3:
          orgLevel.level3 = elt.dhisLevel.level;
          break;
        case 4:
          orgLevel.level4 = elt.dhisLevel.level;
          break;
        case 5:
          orgLevel.level5 = elt.dhisLevel.level;
          break;
        case 6:
          orgLevel.level6 = elt.dhisLevel.level;
          break;
        default:
          console.log("Pas de correspondance");
      }
    });

    storeData.orgUnitLevel[0] = orgLevel;
    //console.log("======dataStore====", JSON.stringify(dataStore.orgUnitLevel));

    await makeDataStore(storeData);
  };

  useEffect(() => {
    (async () => {
      await getStoreData();
    })();
  }, []);

  return (
    <DataStoreContext.Provider value={storeData}>
      <LevelContext.Provider value={levelList}>
        <StoreLevelContext.Provider value={storeLevelList}>
          <UpdateDataStoreContext.Provider value={updateIndicator}>
            <UpdateLevelContext.Provider value={updateLevel}>
              {children}
            </UpdateLevelContext.Provider>
          </UpdateDataStoreContext.Provider>
        </StoreLevelContext.Provider>
      </LevelContext.Provider>
    </DataStoreContext.Provider>
  );
};

export {
  useDataStoreContext,
  LevelContext,
  StoreLevelContext,
  UpdateDataStoreContext,
  UpdateLevelContext,
  DataContextProvider,
};
