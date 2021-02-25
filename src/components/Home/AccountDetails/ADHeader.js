import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import IvanAvatar from "../../../uploads/avatar.jpg";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import classes from "./accountdetails.module.css";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//REDUX

function ADHeader(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleCloseAndBalance = () => {
    setAnchorEl2(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };
  // return props.displayBalance();

  return (
    <div className={classes.balance_header}>
      <div className={classes.name_container}>
        <Avatar className={classes.name_avatar} src={IvanAvatar}></Avatar>
        <Typography variant="h6" className={classes.pageTitle}>
          Hello, XXXX
        </Typography>
      </div>
      <div className={classes.balance_controlls}>
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            startIcon={<ExpandMoreIcon />}
          >
            XXXX
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>XXXX</MenuItem>
            <MenuItem onClick={handleClose}>XXXX</MenuItem>
            <MenuItem onClick={handleClose}>Create new account</MenuItem>
          </Menu>
        </div>
        <div>
          <IconButton
            aria-label="more"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick2}
            className={classes.button_controll}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleCloseAndBalance}>XXXX</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default ADHeader;
