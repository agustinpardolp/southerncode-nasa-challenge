import styled from 'styled-components';

const StyledPhotoDiv = styled.div`
  margin: 1%;
  height: 100%;
  background: ${(props) => `url("${props.img}") no-repeat center;`};
  background-size: ${(props) => (props.backgroundSize ? props.backgroundSize : 'cover')};
  position: relative;
  -webkit-transform: scale(1);
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  backface-visibility: hidden;
  width: 100%;
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
    backface-visibility: hidden;
  }
`;

const StyledContainer = styled.span`
  position: relative;
  display: block;
  overflow: hidden;
  height: ${(props) => (props.height ? props.height : '100%')};
  padding: 5px;
  max-width: ${(props) => (props.width ? props.width : '100%')};
  li {
    color: var(--white);
    display: flex;
    align-items: center;
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
