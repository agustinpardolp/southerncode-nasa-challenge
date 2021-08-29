import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage, useIntl } from "react-intl";
import MenuItem from "@material-ui/core/MenuItem";

import { Select as MaterialSelect } from "@material-ui/core";

import { StyledSelectContainer } from "./styled-components";
const Select = ({ options, handleChange, keyValue, placeholder, width }) => {
  // const intl = useIntl();
  return (
    <StyledSelectContainer width={width}>
      <MaterialSelect
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        onChange={(e) => handleChange(e, keyValue)}
        defaultValue=""
        placeholder={placeholder}
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
