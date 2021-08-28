import styled, { keyframes } from "styled-components";

export const BaseAnimation = styled.div`
  animation-duration: ${(props) => props.duration};
  animation-timing-function: ${(props) => props.timingFunction};
  animation-delay: ${(props) => props.delay};
  animation-iteration-count: ${(props) => props.iterationCount};
  animation-direction: ${(props) => props.direction};
  animation-fill-mode: ${(props) => props.fillMode};
  animation-play-state: ${(props) => props.playState};
  display: ${(props) => props.display};
  position: ${(props) => props.position && props.position};
  right: ${(props) => props.right && props.right};
  top: ${(props) => props.top && props.top};
  left: ${(props) => props.left && props.left};
  bottom: ${(props) => props.bottom && props.bottom};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
`;

BaseAnimation.defaultProps = {
  duration: "1s",
  timingFunction: "ease",
  delay: "0s",
  iterationCount: "1",
  direction: "normal",
  // fillMode: "both",
  playState: "running",
  display: "block",
};

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
    justify-content: ${(props) =>
      props.childJustify ? props.childJustify : "center"};
    align-items: ${(props) => (props.childAlign ? props.childAlign : "center")};
    padding: 4%;
    &:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.6);
    }
  }
`;
const FadeInAnimation = keyframes`

  from { opacity: 0; }
  to { opacity: 1; }
`;

const upperBaseAnimation = keyframes`

from { transform:translateY(-100px) }
/* to { transform:translateY(10px) } */
`;

const sideBaseAnimation = keyframes`

from { transform:translateX(250px) }
/* to { transform:translateX(-10px) } */
`;

export const FadeIn = styled(BaseAnimation)`
  /* regulo la transicion, mas rapido, opaco o no etc */
  transition: 2s;
  animation-duration: 0.3s;
  animation-name: ${FadeInAnimation}; /* seteo sobre el efecto seleccionado el nombre
  de la animacion */
`;

export const UpperAnimation = styled(BaseAnimation)`
  animation-name: ${upperBaseAnimation}; /*animacion de arriba abajo */
`;
export const SideAnimation = styled(BaseAnimation)`
  animation-name: ${sideBaseAnimation}, ${FadeInAnimation}; /*animacion lateral para el toast */
`;
