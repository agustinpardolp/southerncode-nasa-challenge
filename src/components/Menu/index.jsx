// import React from "react";
// import Button from "@material-ui/core/Button";
// import { Menu as SimpleMenu } from "@material-ui/core";
// import MenuItem from "@material-ui/core/MenuItem";

// const Menu = ({ label, options }) => {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         {label}
//       </Button>
//       <SimpleMenu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         {options &&
//           options.map((option) => {
//             return (
//               <MenuItem key={option.id} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             );
//           })}
//       </SimpleMenu>
//     </div>
//   );
// };

// export default Menu;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { StyledMenu } from "./styled-components";

const useStyles = makeStyles({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const Menu = ({ label, options, onClick }) => {
    debugger
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    console.log(nodeIds);
    console.log(event.target.value);
    setSelected(nodeIds);
  };

  const handleChange = (event, value) => {
      debugger
    event.preventDefault()
    onClick(value.item)
;
  };

  return (
    <StyledMenu>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
      >
        <TreeItem nodeId="1" label={label}>
          {options &&
            options.map((option) => {
              return (
                <TreeItem
                  nodeId={option.id}
                  label={option.label}
                  value={option.item}
                  onLabelClick={(e) => handleChange(e, option)}
                />
              );
            })}
        </TreeItem>
      </TreeView>
    </StyledMenu>
  );
};

export default Menu;
