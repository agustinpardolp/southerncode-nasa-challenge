import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import MenuItem from '@material-ui/core/MenuItem';

import { Select as MaterialSelect } from '@material-ui/core';

import { StyledSelectContainer } from './styled-components';

const Select = ({
  options,
  handleChange,
  keyValue,
  placeholder,
  width,
  name,
}) => {
  const intl = useIntl();
  return (
    <StyledSelectContainer width={width}>
      <MaterialSelect
        onChange={(e) => handleChange(e, keyValue)}
        defaultValue=""
        placeholder={placeholder}
        aria-label={name}
        data-testid="select"
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
  placeholder: '',
  options: [],
};
Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })),
  keyValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Select;
