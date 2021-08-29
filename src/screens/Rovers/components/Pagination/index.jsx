import React from "react";
import { StyledPagination, Container } from "./styled-components";


const Pagination = ({ handleChange, currentPage }) => {
  return (
    <Container>
      <StyledPagination count={5} onChange={handleChange} page={currentPage} />
    </Container>
  );
};

export default Pagination;
