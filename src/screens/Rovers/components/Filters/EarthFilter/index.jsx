import React from 'react';
import PublicIcon from '@material-ui/icons/Public';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { StyledFilterContainer, IconContainer } from '../styled-components';

import DatePicker from '../../../../../components/DatePicker';
import { queryKeys } from '../../../constants';

const EarthFilter = ({ handleDateChange }) => (
  <StyledFilterContainer>
    <IconContainer>
      <PublicIcon />
      <h4><FormattedMessage id="filter.earth" /></h4>
    </IconContainer>

    <DatePicker
      variant="outlined"
      size="small"
      handleChange={handleDateChange}
      keyValue={queryKeys.earthDate}
    />
  </StyledFilterContainer>
);

export default EarthFilter;

EarthFilter.propTypes = {
  handleDateChange: PropTypes.func.isRequired,
};
