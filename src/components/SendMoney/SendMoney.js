import { Button, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Container from "../Layout/Container";
import Wrapper from "../Layout/Wrapper";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import classes from "./SendMoney.module.css";
import SendIcon from "@material-ui/icons/Send";

function AddMoney(props) {
  const [receivedState, setReceivedState] = useState();
  const [ammount, setammount] = useState("");

  useEffect(() => {
    setReceivedState(props.returnedState);
    // eslint-disable-next-line
  }, []);

  const addMoneyHandler = () => {
    if (ammount <= 0) return;
    props.dispatch({ type: "SEND_MONEY", payload: ammount });
  };

  return (
    <Wrapper>
      <Container ofStyle="Container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" style={{ marginBottom: 14 }}>
            Send money
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
          onClick={addMoneyHandler}
          variant="outlined"
          color="primary"
          className={classes.button123}
          endIcon={<SendIcon />}
        >
          Send money
        </Button>
      </Container>
    </Wrapper>
  );
}

function mapStateToProps(state) {
  const returnedState = state;
  return { returnedState };
}

export default connect(mapStateToProps)(AddMoney);
