import React from "react";
import PublicIcon from "@material-ui/icons/Public";
import { StyledFilterContainer, IconContainer } from "../styled-components";

import DatePicker from "../../../../../components/DatePicker";
import { queryKeys } from "../../../constants";

const EarthFilter = ({handleDateChange}) => {
  return (
    <StyledFilterContainer>
      <IconContainer>
        <PublicIcon />
        <h4>Earth date</h4>
      </IconContainer>
      <DatePicker
        variant="outlined"
        size="small"
        handleChange={handleDateChange}
        keyValue={queryKeys.earthDate}
      />
    </StyledFilterContainer>
  );
};

export default EarthFilter;
