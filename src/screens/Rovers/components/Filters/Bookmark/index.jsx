import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import usePopover from '../../../../../hooks/usePopover';
import Popover from '../../../../../components/Popover';
import { popoverPosition } from '../../../../../components/Popover/constants';

import { StyledBookMark } from './styled-components';

const Bookmark = ({ children, popoverLabel, handleClick }) => {
  const {
    anchorEl,
    open,
    handlePopoverOpen,
    handlePopoverClose,
  } = usePopover();

  return (
    <StyledBookMark
      onClick={handleClick}
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <Popover
        open={open}
        anchorEl={anchorEl}
        transformOrigin={{
          vertical: popoverPosition.top,
          horizontal: '',
        }}
        onClose={handlePopoverClose}
      >
        <span>
          <FormattedMessage id={popoverLabel} />
        </span>
      </Popover>
      {children}
    </StyledBookMark>
  );
};
export default Bookmark;

Bookmark.propTypes = {
  children: PropTypes.element.isRequired,
  popoverLabel: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
