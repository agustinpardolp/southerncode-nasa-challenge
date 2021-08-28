// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";

// import ListItemIcon from "@material-ui/core/ListItemAvatar";
import PublicIcon from "@material-ui/icons/Public";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import CameraIcon from "@material-ui/icons/Camera";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 400,
//   },
// });

// const PhotoCard = ({
//   cameraName,
//   earthDate,
//   imgSrc,
//   roverName,
//   roverStatus,
// }) => {
//   const classes = useStyles();
//   debugger;
//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image={imgSrc}
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {roverName}
//             <ListItemText primary="Status" secondary={roverStatus} />
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             <List className={classes.root}>
//               <ListItem>
//                 <ListItemIcon>
//                   <PublicIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Earth Date" secondary={earthDate} />
//               </ListItem>
//               <ListItem>
//                 <ListItemIcon>
//                   <Brightness4Icon />
//                 </ListItemIcon>
//                 <ListItemText primary="Sol Date" secondary="Jan 7, 2014" />
//               </ListItem>
//               <ListItem>
//                 <ListItemIcon>
//                   <CameraIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Camera model" secondary={cameraName} />
//               </ListItem>
//             </List>
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions></CardActions>
//     </Card>
//   );
// };

// export default PhotoCard;
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
}) => {
  const handleClick = (path) => {};

  const handleViewPhoto = () => {};

  return (
    <StyledContainer height={height} width={width}>
      <StyledPhotoDiv
        img={imgSrc}
        onClick={handleViewPhoto}
        backgroundSize={backgroundSize}
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
                  Sol Date: <span>{earthDate}</span>
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
