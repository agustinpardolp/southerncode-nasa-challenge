import styled from "styled-components";

export const StyledNotification = styled.div`
  background: ${(props) =>
    props.type === "success"
      ? "var(--primaryConfirm)"
      : "var(--primaryCancel)"};
  height: 4rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1000000;
  button {
    background: ${(props) =>
      props.type === "success"
        ? "var(--primaryConfirm)"
        : "var(--primaryCancel)"};
    border: none;
    margin-left: 4%;
  }
`;
