import styled from 'styled-components';

const StyledPhotoDiv = styled.div`
  backface-visibility: hidden;
  background: ${(props) => `url("${props.img}") no-repeat center;`};
  background-size: ${(props) => (props.backgroundSize ? props.backgroundSize : 'cover')};
  height: 100%;
  margin: 1%;
  position: relative;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  width: 100%;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
    backface-visibility: hidden;
  }
`;

const StyledContainer = styled.span`
  display: block;
  height: ${(props) => (props.height ? props.height : '100%')};
  max-width: ${(props) => (props.width ? props.width : '100%')};
  padding: 5px;
  position: relative;
  overflow: hidden;
  li {
    align-items: center;
    color: var(--white);
    display: flex;
    font-size: 0.7rem;
    margin: 2px;
    svg {
      margin-right: 5px;
    }
  }
`;

const StyledTitle = styled.div`
  align-items: flex-end;
  color: var(--white);
  display: flex;
  font-size: 1.4rem;
  height: 100%;
  margin-bottom: 24px;
`;
const StyledSubTitle = styled.div`
  color: var(--white);
  display: flex;
  font-size: 1rem;
  height: 100%;
`;
const StyledListContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const StyledInfoContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
  justify-items: center;
  width: 100%;
`;

export {
  StyledTitle,
  StyledContainer,
  StyledPhotoDiv,
  StyledSubTitle,
  StyledInfoContainer,
  StyledListContainer,
};
