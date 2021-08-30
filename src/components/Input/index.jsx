import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styled-components';

const Input = ({
  label,
  placeholder,
  variant,
  size,
  handleChange,
  type = 'text',
  keyValue,
}) => (
  <StyledInput
    id="standard-basic"
    label={label}
    placeholder={placeholder}
    variant={variant}
    size={size}
    onChange={(e) => handleChange(e, keyValue)}
    type={type}
  />
);

export default Input;

Input.defaultProps = {
  size: 'small',
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string,
  handleChange: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
};
