/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import TranslateIcon from '@material-ui/icons/Translate';
import PropTypes from 'prop-types';

import { StyledTitle, TranslateContainer } from '../../styled-components';
import Popover from '../../../Popover';
import { popoverPosition } from '../../../Popover/constants';
import usePopover from '../../../../hooks/usePopover';

const Translations = ({ handleChangeLanguage }) => {
  const {
    anchorEl,
    open,
    handlePopoverOpen,
    handlePopoverClose,
  } = usePopover();
  return (
    <StyledTitle
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
          <FormattedMessage id="navbar.translate" />
        </span>
      </Popover>
      <TranslateContainer>
        <TranslateIcon fontSize="large" />
        <ul>
          <li>
            <button value="en-us" type="button" onClick={handleChangeLanguage} data-testid="change-language">
              <FormattedMessage id="navbar.english" />
            </button>
          </li>
          <li>
            <button value="en-es" type="button" onClick={handleChangeLanguage}>
              <FormattedMessage id="navbar.spanish" />
            </button>
          </li>
        </ul>
      </TranslateContainer>
    </StyledTitle>
  );
};

export default Translations;

Translations.propTypes = {
  handleChangeLanguage: PropTypes.func.isRequired,
};
