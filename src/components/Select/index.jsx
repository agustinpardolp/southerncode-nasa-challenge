import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import MenuItem from '@material-ui/core/MenuItem';

import { Select as MaterialSelect } from '@material-ui/core';

import { StyledSelectContainer } from './styled-components';

const Select = ({
  options, handleChange, keyValue, placeholder, width,
}) => {
  const intl = useIntl();
  return (
    <StyledSelectContainer width={width}>
      <MaterialSelect
        onChange={(e) => handleChange(e, keyValue)}
        defaultValue=""
        placeholder={placeholder}
      >
        <MenuItem value="">
          <em>{intl.formatMessage({ id: 'select.none' })}</em>
        </MenuItem>
        {options
          && options.map((option) => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </MaterialSelect>
    </StyledSelectContainer>
  );
};
Select.defaultProps = {
  width: '12vw',
};
Select.propTypes = {
  options: PropTypes.arrayOf.isRequired,
  keyValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  width: PropTypes.bool,
};

export default Select;
