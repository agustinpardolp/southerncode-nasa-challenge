import { useState } from 'react';

const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return {
    handlePopoverOpen,
    handlePopoverClose,
    open,
    anchorEl,
  };
};

export default usePopover;
