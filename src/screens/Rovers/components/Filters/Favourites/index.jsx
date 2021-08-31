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
      dataTestid="favourites"
    />
  </StyledContainer>
);

export default Favourites;

Favourites.defaultProps = {
  favouritesList: [],

};
Favourites.propTypes = {
  setBookmarkQuery: PropTypes.func.isRequired,
  favouritesList: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })),
};
