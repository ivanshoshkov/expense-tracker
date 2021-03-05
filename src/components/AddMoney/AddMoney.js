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
  const [modal, setmodal] = useState(false);

  useEffect(() => {
    setReceivedState(props.returnedState);
    // eslint-disable-next-line
  }, []);

  const addMoneyHandler = () => {
    if (ammount <= 0) return;
    props.dispatch({ type: "ADD_MONEY", payload: ammount });
    setSnackbar((snackbar) => !snackbar);
  };

  const accountDetails = () => {
    setmodal(true);
    console.log(modal);
  };

  const ModalComponent = () => {
    return (
      <div className={classes.loadercontainer}>
        <Container ofStyle="Container">
          <div className={classes.loaderdetails}>
            <TextField
              className={classes.loaderdetail}
              disabled
              label="IBAN"
              defaultValue={receivedState.selectedAccount.iban}
              variant="filled"
            />
            <TextField
              className={classes.loaderdetail}
              disabled
              label="BIC"
              defaultValue={receivedState.selectedAccount.bic}
              variant="filled"
            />
            <TextField
              className={classes.loaderdetail}
              disabled
              label="Ammount"
              defaultValue={receivedState.selectedAccount.ammount}
              variant="filled"
            />
            <TextField
              className={classes.loaderdetail}
              disabled
              label="Expenses"
              defaultValue={receivedState.selectedAccount.expenses}
              variant="filled"
            />
            <TextField
              className={classes.loaderdetail}
              disabled
              label="Currency"
              defaultValue={receivedState.selectedAccount.currency}
              variant="filled"
            />
            <TextField
              className={classes.loaderdetail}
              disabled
              label="Currency Name"
              defaultValue={receivedState.selectedAccount.currencyName}
              variant="filled"
            />
            <TextField
              className={classes.loaderdetail}
              disabled
              label="Active"
              defaultValue={receivedState.selectedAccount.active}
              variant="filled"
            />
          </div>

          <Button
            style={{ width: "100%" }}
            variant="contained"
            color="primary"
            onClick={() => setmodal(false)}
          >
            Close
          </Button>
        </Container>
      </div>
    );
  };

  return (
    <Wrapper>
      <Container ofStyle="Container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" style={{ marginBottom: 14 }}>
            Add money
          </Typography>
          <TextField
            variant="filled"
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
        <div className={classes.carddetails} onClick={accountDetails}>
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
          message={
            receivedState
              ? `${Number(ammount).toLocaleString()} ${
                  receivedState.selectedAccount.currency
                } added successfully!`
              : null
          }
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
      {modal && <ModalComponent />}
    </Wrapper>
  );
}

function mapStateToProps(state) {
  const returnedState = state;
  return { returnedState };
}

export default connect(mapStateToProps)(AddMoney);
