import React, { useEffect, useMemo } from "react";
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
import useFilters from "../../hooks/useFilters";
import Pagination from "./components/Pagination";

const Rovers = () => {
  const dispatch = useDispatch();
  const fetchRovers = dispatch(fetchRoversByModel);
  const roversData = useSelector((state) => {
    return {
      roverList: state.rovers.data.photos || state.rovers.data.latest_photos,
      roverStatus: state.rovers.status,
    };
  });
  const { type } = useParams();
  const {
    query,
    page,
    handleDataChange,
    handleSelectChange,
    handlePagination,
    saveFilter,
    setQuery
  } = useFilters("");

  useEffect(() => {
    fetchRovers(type, query, page);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, type, page]);

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
              sol={value.sol}
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
          handleSelectChange={handleSelectChange}
          query={query}
          saveFilter={saveFilter}
          setBookmarkQuery={setQuery}
        />

        {roversData.roverStatus === REQUEST_STATUS.LOADING ? (
          <Spinner />
        ) : (
          <>{onRenderList}</>
        )}
        <Pagination handleChange={handlePagination} currentPage={page} />
      </>
    </ViewWrapper>
  );
};

export default Rovers;
