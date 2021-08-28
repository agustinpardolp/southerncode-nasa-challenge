import styled from "styled-components";

const StyledSpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  & > :first-child {
    position: absolute;
    top: 50%;
    left: 50%;
    svg {
      color: var(--jet);
    }
  }
`;

export { StyledSpinnerContainer };
