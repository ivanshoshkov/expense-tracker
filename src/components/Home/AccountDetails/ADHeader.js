import React, { useState, useEffect } from "react";
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
import { connect } from "react-redux";
import Loader from "../../Loader/Loader";
//REDUX

function ADHeader(props) {
  const [receivedState, setReceivedState] = useState();
  const [selectedAccountName, setSelectedAccountName] = useState();

  useEffect(() => {
    setReceivedState(props.returnedState);
  }, []);

  useEffect(() => {
    props.dispatch({ type: "CHANGE_ACCOUNT", payload: selectedAccountName });
    if (selectedAccountName) {
      receivedState.accounts.forEach((account) => {
        if (account.currency === selectedAccountName) {
          props.dispatch({
            type: "SELECTED_ACCOUNT",
            payload: account,
          });
        }
      });
    } else return;
  }, [selectedAccountName]);

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
    props.toggleBalance();
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };

  const closeAndSelectHandler = (e) => {
    const textValue = e.target.innerText;
    setSelectedAccountName(textValue);
    setAnchorEl(null);
  };

  const AccountsSelectHandler = () => {
    return receivedState.accounts.map((account) => {
      return (
        <MenuItem
          key={account.currency}
          onClick={(e) => closeAndSelectHandler(e)}
        >
          {account.currency}
        </MenuItem>
      );
    });
  };
  // return props.displayBalance();
  return receivedState ? (
    <div className={classes.balance_header}>
      <div className={classes.name_container}>
        <Avatar className={classes.name_avatar} src={IvanAvatar}></Avatar>
        <Typography variant="h6" className={classes.pageTitle}>
          Hello {receivedState.user.firstName}
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
            {selectedAccountName
              ? selectedAccountName
              : receivedState.selectedAccount.currency}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>+ new account</MenuItem>
            <AccountsSelectHandler />
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
            <MenuItem onClick={handleCloseAndBalance}>
              { !props.show ? "Show balance" : "Hide balance"}
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

function mapStateToProps(state) {
  const returnedState = state;
  return { returnedState };
}

export default connect(mapStateToProps)(ADHeader);
