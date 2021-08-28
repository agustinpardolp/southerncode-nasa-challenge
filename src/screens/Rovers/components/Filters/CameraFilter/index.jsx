import React from "react";
import CameraIcon from "@material-ui/icons/Camera";
import Select from "../../../../../components/Select";
import { StyledFilterContainer, IconContainer } from "../styled-components";
import { cameraModels, queryKeys } from "../../../constants";

const CameraFilter = ({ handleSelectChange }) => {
  return (
    <StyledFilterContainer>
      <IconContainer>
        <CameraIcon />
        <h4>Camera Type</h4>
      </IconContainer>
      <Select options={cameraModels} handleChange={handleSelectChange}  keyValue={queryKeys.camera}/>
    </StyledFilterContainer>
  );
};

export default CameraFilter;
