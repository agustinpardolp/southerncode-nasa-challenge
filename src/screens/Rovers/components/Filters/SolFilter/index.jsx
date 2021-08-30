import React from 'react';
import PropTypes from 'prop-types';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { FormattedMessage, useIntl } from 'react-intl';

import { StyledFilterContainer, IconContainer } from '../styled-components';
import Input from '../../../../../components/Input';
import { queryKeys } from '../../../constants';

const SolFilter = ({ handleInputChange }) => {
  const intl = useIntl();
  return (
    <StyledFilterContainer>
      <IconContainer>
        <Brightness4Icon />
        <h4>
          <FormattedMessage id="filter.sol" />
        </h4>
      </IconContainer>
      <Input
        placeholder={`${intl.formatMessage({ id: 'filter.sol' })}...`}
        variant="outlined"
        size="small"
        type="number"
        handleChange={handleInputChange}
        keyValue={queryKeys.sol}
      />
    </StyledFilterContainer>
  );
};

export default SolFilter;

SolFilter.propTypes = {
  handleInputChange: PropTypes.func.isRequired,

};
