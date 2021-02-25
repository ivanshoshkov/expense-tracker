import Container from "../../Layout/Container";
import React from "react";
import classes from "./accountdetails.module.css";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";

import { Link } from "react-router-dom";

//REDUX

import ADHeader from "./ADHeader/ADHeader";
import Wrapper from "../../Layout/Wrapper";

function AccountDetails(props) {
  return (
    <Wrapper>
      <Container class={classes.animateup} ofStyle="Container">
        <ADHeader />

        <div className={classes.balance_container}>
          <div className={classes.balance_item}>
            <Typography variant="overline">Your balance is:</Typography>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <Typography variant="h4" className={classes.balance_sum}>
                {Number(0).toLocaleString()}
              </Typography>
              <Typography variant="h6">XXXX</Typography>
            </div>
          </div>
          <div className={classes.balance_item}>
            <Typography variant="overline">
              Your expenses this month:
            </Typography>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <Typography variant="h4" className={classes.balance_expense}>
                {Number(0).toLocaleString()}
              </Typography>
              <Typography variant="h6">XXXX</Typography>
            </div>
          </div>
        </div>

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
      </Container>
    </Wrapper>
  );
}



export default AccountDetails;
