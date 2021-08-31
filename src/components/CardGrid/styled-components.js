import styled from 'styled-components';

const StyledCardGrid = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  margin:3rem;
`;

const StyledWrapper = styled.div`
  box-shadow: 0 0 5px;
`;

export { StyledCardGrid, StyledWrapper };
