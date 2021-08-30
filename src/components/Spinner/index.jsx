import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StyledSpinnerContainer } from './styled-components';

const Spinner = () => (
  <StyledSpinnerContainer>
    <CircularProgress disableShrink />
  </StyledSpinnerContainer>
);

export default Spinner;
