import PublicIcon from '@material-ui/icons/Public';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import CameraIcon from '@material-ui/icons/Camera';
import { useIntl } from 'react-intl';

import React from 'react';
import PropTypes from 'prop-types';

import { OverlayAnimation } from '../../utils/animations';

import {
  StyledTitle,
  StyledContainer,
  StyledPhotoDiv,
  StyledSubTitle,
  StyledInfoContainer,
  StyledListContainer,
} from './styled-components';

const Card = ({
  cameraName,
  earthDate,
  imgSrc,
  roverName,
  roverStatus,
  height,
  width,
  backgroundSize,
  sol,
}) => {
  const intl = useIntl();

  return (
    <StyledContainer height={height} width={width} data-testid="photo_card">
      <StyledPhotoDiv
        img={imgSrc}
        backgroundSize={backgroundSize}
        small={imgSrc}
        large={imgSrc}
        hideDownload
      >
        <OverlayAnimation>
          <StyledInfoContainer>
            <StyledTitle>
              <span>{roverName}</span>
            </StyledTitle>
            <StyledSubTitle>
              <>
                {`${intl.formatMessage({ id: 'card.status' })}: `}
                {roverStatus}
              </>
            </StyledSubTitle>
            <StyledListContainer>
              <ul>
                <li>
                  <PublicIcon fontSize="small" />
                  {`${intl.formatMessage({ id: 'filter.earth' })}: `}
                  <span>{earthDate}</span>
                </li>
                <li>
                  <Brightness4Icon fontSize="small" />
                  {`${intl.formatMessage({ id: 'filter.sol' })}: `}
                  <span>{sol}</span>
                </li>
                <li>
                  <CameraIcon fontSize="small" />
                  {`${intl.formatMessage({ id: 'card.cameraModel' })}: `}
                  <span>{cameraName}</span>
                </li>
                <li />
              </ul>
            </StyledListContainer>
          </StyledInfoContainer>
        </OverlayAnimation>
      </StyledPhotoDiv>
    </StyledContainer>
  );
};
export default Card;

Card.defaultProps = {
  height: '100%',
  width: '100%',
  backgroundSize: 'cover',
};
Card.propTypes = {
  roverStatus: PropTypes.string.isRequired,
  cameraName: PropTypes.string.isRequired,
  earthDate: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  roverName: PropTypes.string.isRequired,
  sol: PropTypes.number.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  backgroundSize: PropTypes.string,
};
