import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import PropTypes from 'prop-types';

import Bookmark from '..';

const RemoveBookmark = ({ popoverLabel, handleClick }) => (
  <Bookmark popoverLabel={popoverLabel} handleClick={handleClick}>
    <DeleteOutlineIcon />
  </Bookmark>
);

export default RemoveBookmark;

RemoveBookmark.propTypes = {
  popoverLabel: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
