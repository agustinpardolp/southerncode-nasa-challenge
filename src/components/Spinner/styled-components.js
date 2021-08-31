import styled from 'styled-components';

const StyledSpinnerContainer = styled.div`
  height: 100vh;
  width: 100%;
  & > :first-child {
    left: 50%;
    position: absolute;
    top: 50%;
    svg {
      color: var(--jet);
    }
  }
`;

export { StyledSpinnerContainer };
