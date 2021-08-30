import React from 'react';
import PropTypes from 'prop-types';

import { StyledPagination, Container } from './styled-components';

const Pagination = ({ handleChange, currentPage }) => (
  <Container>
    <StyledPagination count={5} onChange={handleChange} page={currentPage} />
  </Container>
);

export default Pagination;

Pagination.propTypes = {
  handleChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};
