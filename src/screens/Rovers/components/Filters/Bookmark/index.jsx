import React from "react";
import Popover from "@material-ui/core/Popover";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { StyledBookMark } from "./styled-components";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const Bookmark = ({ handleAddBookmark, popoverLabel }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <StyledBookMark
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      onClick={handleAddBookmark}
    >
      <Popover
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",

        }}
        transformOrigin={{
          vertical: "top",
          horizontal:''
  
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <span>{popoverLabel}</span>
      </Popover>
      <BookmarkIcon  />
      
    </StyledBookMark>
  );
};

export default Bookmark;
