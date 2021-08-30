import React from 'react';
import PropTypes from 'prop-types';

import { StyledWrapper, StyledTitle } from './styled-components';

const ViewWrapper = ({ title = '', children }) => (
  <StyledWrapper>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </StyledWrapper>
);

ViewWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
export default ViewWrapper;
