import React from 'react';
import { Popover as MaterialPopover } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { popoverPosition } from './constants';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

const Popover = ({
  open, anchorEl, handlePopoverClose, children,
}) => {
  const classes = useStyles();
  return (
    <MaterialPopover
      className={classes.popover}
      classes={{
        paper: classes.paper,
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: popoverPosition.bottom,
        horizontal: popoverPosition.left,
      }}
      transformOrigin={{
        vertical: popoverPosition.top,
        horizontal: popoverPosition.left,
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
    >
      {children}
    </MaterialPopover>
  );
};

export default Popover;

Popover.defaultProps = {
  open: false,
  anchorEl: ' ',
  handlePopoverClose: () => {},
};
Popover.propTypes = {
  open: PropTypes.bool,
  anchorEl: PropTypes.string,
  handlePopoverClose: PropTypes.func,
  children: PropTypes.objectOf.isRequired,
};
