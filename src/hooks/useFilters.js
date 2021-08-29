import { useState, useEffect } from "react";
import { queryValues } from "../screens/Rovers/constants";
import { debounce, loadFromLocalStorage, saveToLocalStorage } from "../utils";
import { transformQueryArray } from "./constants";

const useFilters = (initialState) => {
  const [queryArray, setQueryArray] = useState([initialState]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const createQuery = (queryArray) => {
    const queries = queryArray.map((item) => item.query).join("");
    const newQuery = `${queries}`;
    setQuery(newQuery);
  };

  useEffect(() => {
    createQuery(queryArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryArray, page]);

  const createQueryArray = (queryParam) => {
    let queryCopyArray = queryArray.slice();
    if (!queryArray.length) {
      setQueryArray([queryParam]);
    } else if (queryCopyArray.some((obj) => obj.key === queryParam.key)) {
      const index = queryCopyArray.findIndex(
        (position) => position.key === queryParam.key
      );
      queryCopyArray.splice(index, 1, queryParam);
      setQueryArray(queryCopyArray);
    } else {
      queryCopyArray = [...queryCopyArray, queryParam];
      setQueryArray(queryCopyArray);
    }
  };

  const handleDataChange = (e, key) => {
    const keyValue = queryValues[key];
    const data = `${keyValue.query}${e.target.value}`;
    const queryConfig = {
      key: keyValue.key,
      query: data,
    };
    keyValue === queryValues.sol.query
      ? handleSearchDebouce(queryConfig)
      : createQueryArray(queryConfig);
    setPage(1);
  };

  const handleSetSearch = (queryConfig) => {
    createQueryArray(queryConfig);
  };
  const handleSearchDebouce = debounce(handleSetSearch);

  const handleSelectChange = (e, key) => {
    const keyValue = queryValues[key];
    const data = e.target.value ? `${keyValue.query}${e.target.value}` : "";
    const queryConfig = {
      key: keyValue.key,
      query: data,
    };
    keyValue === queryValues.sol.query
      ? handleSearchDebouce(queryConfig)
      : createQueryArray(queryConfig);
    setPage(1);
  };

  const handlePagination = (e, value) => {
    setPage(value);
  };

  const saveFilter = () => {
    if (loadFromLocalStorage("queryData")) {
      let currentDataValues = loadFromLocalStorage("queryData");
      if (currentDataValues.filter((val) => val.value === query)) {
        let newValues = transformQueryArray(currentDataValues.length, query);
        saveToLocalStorage("queryData", [...currentDataValues, ...newValues]);
      }
    } else {
      let newValues = transformQueryArray(0, query);
      saveToLocalStorage("queryData", newValues);
    }
  };

  return {
    handleDataChange,
    handleSelectChange,
    handlePagination,
    saveFilter,
    query,
    page,
    queryArray,
    setQuery,
  };
};

export default useFilters;
