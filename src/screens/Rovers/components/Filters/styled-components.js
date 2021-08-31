import styled from 'styled-components';

const StyledFilterContainer = styled.div`
  align-items: center;
  background-color: var(--seashell);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 9px 25px -6px;
  border-radius: 8px;
  display: table;
  justify-content: space-between;
  margin: 10px;
  padding: 20px;
  h4 {
    margin: 10px;
  }
`;
const StyledContainter = styled.div`
  align-items: flex-start;
  box-shadow: 0px 10px 10px -15px var(--jet);
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 15px 0;
`;

const IconContainer = styled.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: 5px;
  }
`;
export { StyledFilterContainer, StyledContainter, IconContainer };
