import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../../../../components/Menu';
import { StyledContainer } from './styled-components';

const Favourites = ({ setBookmarkQuery, favouritesList }) => (
  <StyledContainer>
    <Menu
      options={favouritesList}
      label="filter.favourites"
      onClick={setBookmarkQuery}
    />
  </StyledContainer>
);

export default Favourites;

Favourites.propTypes = {
  setBookmarkQuery: PropTypes.func.isRequired,
  favouritesList: PropTypes.arrayOf.isRequired,
};
