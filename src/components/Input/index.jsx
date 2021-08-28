import React from "react";
import { StyledInput } from "./styled-components";

const Input = ({
  label,
  placeholder,
  variant,
  size,
  handleChange,
  type = "text",
  keyValue
}) => {
  return (
    <StyledInput
      id="standard-basic"
      label={label}
      placeholder={placeholder}
      variant={variant}
      size={size}
      onChange={(e)=>handleChange(e, keyValue)}
      type={type}
    />
  );
};

export default Input;
