import styled from 'styled-components';

export const OverlayAnimation = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  right: 0%;
  position: relative;
  z-index: 10000;
  &:first-child {
    opacity: 0;
    transition: 0.4s ease-in-out;
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: ${(props) => (props.childJustify ? props.childJustify : 'center')};
    align-items: ${(props) => (props.childAlign ? props.childAlign : 'center')};
    padding: 4%;
    &:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.6);
    }
  }
`;
