import PublicIcon from "@material-ui/icons/Public";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import CameraIcon from "@material-ui/icons/Camera";


import React from "react";
import PropTypes from "prop-types";

import { OverlayAnimation } from "../../utils/animations";

import {
  StyledTitle,
  StyledContainer,
  StyledPhotoDiv,
  StyledSubTitle,
  StyledInfoContainer,
  StyledListContainer,
} from "./styled-components";

const Card = ({
  cameraName,
  earthDate,
  imgSrc,
  roverName,
  roverStatus,
  height,
  width,
  backgroundSize,
  sol
}) => {
  const handleClick = (path) => {};

  const handleViewPhoto = () => {};

  return (
    <StyledContainer height={height} width={width}>
      <StyledPhotoDiv
        img={imgSrc}
        onClick={handleViewPhoto}
        backgroundSize={backgroundSize}
        small={imgSrc}
        large={imgSrc}
        hideDownload
      >
        <OverlayAnimation onClick={() => handleClick()}>
          <StyledInfoContainer>
            <StyledTitle>
              <span>{roverName}</span>
            </StyledTitle>
            <StyledSubTitle>Status: {roverStatus}</StyledSubTitle>
            <StyledListContainer>
              <ul>
                <li>
                  <PublicIcon fontSize="small" />
                  Earth Date: 
                  <span>{earthDate}</span>
                </li>
                <li>
                  <Brightness4Icon fontSize="small" />
                  Sol Date: <span>{sol}</span>
                </li>
                <li>
                  {" "}
                  <CameraIcon fontSize="small" />
                  Camera model: <span>{cameraName}</span>{" "}
                </li>
                <li></li>
              </ul>
            </StyledListContainer>
          </StyledInfoContainer>
        </OverlayAnimation>
      </StyledPhotoDiv>
    </StyledContainer>
  );
};
export default Card;

Card.propTypes = {
  element: PropTypes.object,
  handleChangeImage: PropTypes.func,
  fontSize: PropTypes.string,
  category: PropTypes.string,
  path: PropTypes.string,
  noTitle: PropTypes.bool,
  filePath: PropTypes.string,
  img: PropTypes.string,
  callBack: PropTypes.func,
  height: PropTypes.string,
  width: PropTypes.string,
  backgroundSize: PropTypes.string,
};
