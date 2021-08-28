import React from "react";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import { StyledFilterContainer, IconContainer } from "../styled-components";
import Input from "../../../../../components/Input";
import { queryKeys } from "../../../constants";

const SolFilter = ({ handleInputChange }) => {
  return (
    <StyledFilterContainer>
      <IconContainer>
        <Brightness4Icon />
        <h4>Sun date</h4>
      </IconContainer>
      <Input
        placeholder="Sol date..."
        variant="outlined"
        size="small"
        type="number"
        handleChange={handleInputChange}
        keyValue={queryKeys.sol}
      />
    </StyledFilterContainer>
  );
};

export default SolFilter;
