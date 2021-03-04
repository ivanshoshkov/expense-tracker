import { Button, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Container from "../Layout/Container";
import Wrapper from "../Layout/Wrapper";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import { Link } from "react-router-dom";
import classes from "./AddMoney.module.css";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";


function AddMoney(props) {
  const [receivedState, setReceivedState] = useState();
  const [ammount, setammount] = useState("");
  const [snackbar, setSnackbar] = useState(false);
  useEffect(() => {
    setReceivedState(props.returnedState);
    // eslint-disable-next-line
  }, []);

  const addMoneyHandler = () => {
    if (ammount <= 0) return;
    props.dispatch({ type: "ADD_MONEY", payload: ammount });
    setSnackbar(snackbar => !snackbar)
  };

  return (
    <Wrapper>
      <Container ofStyle="Container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" style={{ marginBottom: 14 }}>
            Add money
          </Typography>
          <TextField
            id="standard-basic"
            label="Ammount"
            type="number"
            value={ammount}
            onChange={(e) => setammount(e.target.value)}
            style={{ width: 150, marginBottom: 8 }}
          />
          <Typography variant="caption" style={{ marginBottom: 14 }}>
            Your current balance is:{" "}
            {receivedState
              ? Number(receivedState.selectedAccount.ammount).toLocaleString() +
                " " +
                receivedState.selectedAccount.currency
              : "XXXX"}
          </Typography>
        </div>
        <div className={classes.carddetails}>
          <div style={{ marginBottom: 6 }}>
            {receivedState
              ? receivedState.user.firstName + " " + receivedState.user.lastName
              : "XXXX"}
          </div>
          <div style={{ marginBottom: 6 }}>
            IBAN: {receivedState ? receivedState.selectedAccount.iban : "XXXX"}
          </div>
          <div className={classes.carddetailssecondary}>
            <div style={{ marginRight: 16 }}>
              Currency:{" "}
              {receivedState
                ? receivedState.selectedAccount.currencyName
                : "XXXX"}
            </div>
            <div>
              {receivedState
                ? Number(receivedState.selectedAccount.ammount).toLocaleString()
                : "XXXX"}
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
          endIcon={<AccountBalanceWalletOutlinedIcon />}
          component={Link}
          to="/add-money"
          onClick={addMoneyHandler}
        >
          Add money
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={snackbar}
          onClose={() => setSnackbar(false)}
          autoHideDuration={3000}
          message={receivedState ? (`${Number(ammount).toLocaleString()} ${receivedState.selectedAccount.currency} added successfully!`): null}
          action={
            <div>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => setSnackbar(false)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}

function mapStateToProps(state) {
  const returnedState = state;
  return { returnedState };
}

export default connect(mapStateToProps)(AddMoney);
