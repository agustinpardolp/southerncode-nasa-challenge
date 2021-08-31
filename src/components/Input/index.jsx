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
  name,
}) => (
  <StyledInput
    id="standard-basic"
    label={label}
    placeholder={placeholder}
    variant={variant}
    size={size}
    onChange={(e) => handleChange(e, keyValue)}
    type={type}
    aria-label={name}
    data-testid="input"
  />
);

export default Input;

Input.defaultProps = {
  size: 'small',
  label: '',
};
Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
