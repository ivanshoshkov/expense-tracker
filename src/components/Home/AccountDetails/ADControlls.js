import React from "react";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import classes from "./accountdetails.module.css";
import { Link } from "react-router-dom";

function ADControlls() {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button123}
        endIcon={<AccountBalanceWalletOutlinedIcon />}
        component={Link}
        to="/add-money"
      >
        Add money
      </Button>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button123}
        endIcon={<SendIcon />}
        component={Link}
        to="/send-money"
      >
        Send money
      </Button>
    </>
  );
}

export default ADControlls;
