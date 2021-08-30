import React from 'react';
import PropTypes from 'prop-types';
import { StyledCardGrid } from './styled-components';

const CardGrid = ({ children }) => <StyledCardGrid>{children}</StyledCardGrid>;

export default CardGrid;

CardGrid.propTypes = {
  children: PropTypes.element.isRequired,
};
