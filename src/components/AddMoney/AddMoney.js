import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Container from "../Layout/Container";
import Wrapper from "../Layout/Wrapper";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";

function AddMoney(props) {
  const [receivedState, setReceivedState] = useState();

  useEffect(() => {
    setReceivedState(props.returnedState);
    // eslint-disable-next-line
  }, []);
  console.log(receivedState);
  return (
    <Wrapper>
      <Container ofStyle="Container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5">ADD MONEY</Typography>
          <TextField
            id="standard-basic"
            label="Ammount"
            type="number"
            style={{ width: 150, marginBottom: 8 }}
          />
          <Typography variant="caption">
            Your current balance is:{" "}
            {receivedState
              ? Number(receivedState.selectedAccount.ammount).toLocaleString() +
                " " +
                receivedState.selectedAccount.currency
              : "XXXX"}
          </Typography>
        </div>
      </Container>
    </Wrapper>
  );
}

function mapStateToProps(state) {
  const returnedState = state;
  return { returnedState };
}

export default connect(mapStateToProps)(AddMoney);
