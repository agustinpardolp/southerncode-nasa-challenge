import React from "react";
import { StyledDatePicker } from "./styled-components";
import moment from "moment";

const DatePicker = ({ label, variant, size, handleChange, keyValue }) => {

  return (
    <StyledDatePicker
      label={label}
      variant={variant}
      size={size}
      type="date"
      defaultValue={moment().format("YYYY-MM-DD")}
      onChange={(e) => handleChange(e, keyValue)}
    />
  );
};

export default DatePicker;
