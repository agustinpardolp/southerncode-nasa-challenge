import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ErrorIcon from "@material-ui/icons/Error";
import PhotoCard from "../../components/PhotoCard";
import CardGrid from "../../components/CardGrid";

import Filters from "./components/Filters";
import ViewWrapper from "../../components/ViewWrapper";
import { fetchRoversByModel } from "../../store/actions/roverActions";
import { REQUEST_STATUS } from "../../constants";
import Spinner from "../../components/Spinner";
import { StyledNoData } from "./styled-components";
import { debounce } from "../../utils";
import { queryValues } from "./constants";

const Rovers = () => {
  const dispatch = useDispatch();
  const fetchRovers = dispatch(fetchRoversByModel);
  const roversData = useSelector((state) => {
    return { roverList: state.rovers.data.photos, status: state.rovers.status };
  });
  const { type } = useParams();
  const [queryArray, setQueryArray] = useState([]);
  const createQuery = () => {
    const queryValues = queryArray.map((item) => item.query).join("");
    return queryValues;
  };

  useEffect(() => {
    const query = createQuery();
    console.log(query);
    fetchRovers(type, query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryArray]);
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
    if (e.target.value) {
      const keyValue = queryValues[key];
      const data = `${keyValue.query}${e.target.value}`;
      const queryConfig = {
        key: keyValue.key,
        query: data,
      };
      keyValue === queryValues.sol.query
        ? handleSearchDebouce(queryConfig)
        : createQueryArray(queryConfig);
    }
  };

  const handleSetSearch = (queryConfig) => {
    createQueryArray(queryConfig);
  };
  const handleSearchDebouce = debounce(handleSetSearch);
  // const handleInputChange = (e, value) => {
  //   const solDate = `sol=${e.target.value}`;
  //   const queryConfig = {
  //     key: "date",
  //     query: solDate,
  //   };
  //   handleSearchDebouce(queryConfig);
  // };

  // const handleSelectChange = (e, value) => {

  //   const cameraType = `&camera=${value.props.value}`;
  //   const queryConfig = {
  //     key: "camera",
  //     query: cameraType,
  //   };
  //   createQueryArray(queryConfig);
  // };

  // const handlePagination = (value) => {
  //   const pagination = `&page=${value.props.value}`;
  //   const queryConfig = {
  //     key: "pagination",
  //     query: pagination,
  //   };
  //   createQueryArray(queryConfig);
  // };

  const onRenderList = useMemo(() => {
    return roversData.roverList?.length ? (
      <CardGrid>
        {roversData.roverList.map((value) => {
          return (
            <PhotoCard
              cameraName={value.camera.name}
              earthDate={value.earth_date}
              key={value.id}
              imgSrc={value.img_src}
              roverName={value.rover.name}
              roverStatus={value.rover.status}
              height="35vh"
              width="20vw"
            />
          );
        })}
      </CardGrid>
    ) : (
      <StyledNoData>
        <ErrorIcon />
        <label>No Results</label>
      </StyledNoData>
    );
  }, [roversData.roverList]);

  return (
    <ViewWrapper title={`Fotos Rover ${type}`}>
      <>
        <Filters
          handleDateChange={handleDataChange}
          handleInputChange={handleDataChange}
          handleSelectChange={handleDataChange}
        />
        {roversData.status === REQUEST_STATUS.LOADING ? (
          <Spinner />
        ) : (
          <>{onRenderList}</>
        )}
      </>
    </ViewWrapper>
  );
};

export default Rovers;
