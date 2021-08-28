import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage, useIntl } from "react-intl";
import MenuItem from "@material-ui/core/MenuItem";

import { Select as MaterialSelect } from "@material-ui/core";

import { StyledSelectContainer } from "./styled-components";
const Select = ({
  options,
  title,
  handleSelectOption,
  icon,
  disableTranslation,
  handleChange,
  keyValue
}) => {
  // const intl = useIntl();
  return (
    <StyledSelectContainer>
      <MaterialSelect
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        onChange={(e)=>handleChange(e, keyValue)}
        label="Age"
        defaultValue=''
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options &&
          options.map((option) => {
            return (
              <MenuItem key={option.id} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
      </MaterialSelect>
    </StyledSelectContainer>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string,
  handleSelectOption: PropTypes.func,
  icon: PropTypes.element,
  disableTranslation: PropTypes.bool,
};

export default Select;
