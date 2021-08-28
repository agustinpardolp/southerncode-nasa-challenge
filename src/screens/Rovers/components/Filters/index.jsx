import React from "react";

import { StyledContainter } from "./styled-components";

import EarthFilter from "./EarthFilter";
import SolFilter from "./SolFilter";
import CameraFilter from "./CameraFilter";

const Filters = ({
  handleDateChange,
  handleInputChange,
  handleSelectChange,
}) => {
  return (
    <StyledContainter>
      <EarthFilter handleDateChange={handleDateChange} />
      <SolFilter handleInputChange={handleInputChange} />
      <CameraFilter handleSelectChange={handleSelectChange} />
    </StyledContainter>
  );
};

export default Filters;
