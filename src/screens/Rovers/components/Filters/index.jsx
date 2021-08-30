import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import { StyledContainter } from './styled-components';

import EarthFilter from './EarthFilter';
import SolFilter from './SolFilter';
import CameraFilter from './CameraFilter';
import Favourites from './Favourites';
import AddBookmark from './Bookmark/AddBookmark';
import RemoveBookmark from './Bookmark/RemoveBookmarks';

const Filters = ({
  handleDateChange,
  handleInputChange,
  handleSelectChange,
  saveFilter,
  setBookmarkQuery,
  removeFilter,
  bookmarks,
}) => {
  useEffect(() => {}, [bookmarks]);
  const handleAddBookmark = useCallback(() => {
    saveFilter();
  }, [saveFilter]);
  const handleRemoveBookmark = useCallback(() => {
    removeFilter();
  }, [removeFilter]);

  return (
    <>
      <StyledContainter>
        <AddBookmark
          popoverLabel="filter.addToFavourites"
          handleClick={handleAddBookmark}
        />
        <EarthFilter handleDateChange={handleDateChange} />
        <SolFilter handleInputChange={handleInputChange} />
        <CameraFilter handleSelectChange={handleSelectChange} />
        <Favourites
          setBookmarkQuery={setBookmarkQuery}
          favouritesList={bookmarks}
        />
        <RemoveBookmark
          popoverLabel="filter.removeFromFavourites"
          handleClick={handleRemoveBookmark}
        />
      </StyledContainter>
    </>
  );
};

export default Filters;

Filters.propTypes = {
  handleDateChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  saveFilter: PropTypes.func.isRequired,
  setBookmarkQuery: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired,
  bookmarks: PropTypes.arrayOf.isRequired,
};
