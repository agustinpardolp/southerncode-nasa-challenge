import React from "react";

import { StyledContainter } from "./styled-components";

import EarthFilter from "./EarthFilter";
import SolFilter from "./SolFilter";
import CameraFilter from "./CameraFilter";
import Bookmark from "./Bookmark";
import Favourites from "./Favourites";

const Filters = ({
  handleDateChange,
  handleInputChange,
  handleSelectChange,
  saveFilter,
  setBookmarkQuery,
}) => {

  const handleAddBookmark = () => {
    saveFilter();
  };

  return (
    <>
      <StyledContainter>
        <Bookmark
          popoverLabel={"Agregar a favoritos"}
          handleAddBookmark={handleAddBookmark}
        />
        <EarthFilter handleDateChange={handleDateChange} />
        <SolFilter handleInputChange={handleInputChange} />
        <CameraFilter handleSelectChange={handleSelectChange} />
        <Favourites setBookmarkQuery={setBookmarkQuery} />
      </StyledContainter>
    </>
  );
};

export default Filters;
