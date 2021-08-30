import styled from 'styled-components';

const StyledSelectContainer = styled.section`
  align-self: flex-end;
  width: ${(props) => (props.width ? props.width : '12vw')};
  div {
    min-width: ${(props) => (props.width ? props.width : '10vw')};
  }
`;

export { StyledSelectContainer };
