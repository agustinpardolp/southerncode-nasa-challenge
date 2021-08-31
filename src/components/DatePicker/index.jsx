import React from 'react';
import PropTypes from 'prop-types';
import { StyledDatePicker } from './styled-components';

const DatePicker = ({
  label, variant, size, handleChange, keyValue,
}) => (
  <StyledDatePicker
    label={label}
    variant={variant}
    size={size}
    type="date"
    onChange={(e) => handleChange(e, keyValue)}
  />
);

export default DatePicker;

DatePicker.defaultProps = {
  size: 'small',
  label: '',
};
DatePicker.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  keyValue: PropTypes.string.isRequired,
};
