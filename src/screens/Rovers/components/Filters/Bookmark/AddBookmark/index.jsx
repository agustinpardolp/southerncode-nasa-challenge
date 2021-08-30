import React from 'react';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PropTypes from 'prop-types';

import Bookmark from '..';

const AddBookmark = ({ popoverLabel, handleClick }) => (
  <Bookmark popoverLabel={popoverLabel} handleClick={handleClick}>
    <BookmarkIcon />
  </Bookmark>
);

export default AddBookmark;

AddBookmark.propTypes = {
  popoverLabel: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
