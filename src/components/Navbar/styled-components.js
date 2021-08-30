import styled from 'styled-components';

const StyledNavbar = styled.div`
  background-color: var(--jet);
  justify-content: center;
  height: 10vh;
  width: 100%;
`;
const StyledNavbarContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 100%;
  img {
    height: 100%;
  }
  h2,
  svg {
    color: var(--white);
    font-size: 18px;
  }
  svg {
    margin-left: 5px;
  }
`;
const StyledSearchContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 10px;
`;

const SearchIconContainer = styled.div`
  margin-right: 10px;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 24px;
  }
`;

const TranslateContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  width: 100%;
  ul {
    list-style: none;
    &:hover {
      cursor: pointer;
    }
  }
`;
export {
  StyledNavbar,
  StyledNavbarContainer,
  StyledSearchContainer,
  SearchIconContainer,
  StyledTitle,
  TranslateContainer,
};
