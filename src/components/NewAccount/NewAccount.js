import React from "react";
import Container from "../Layout/Container";
import Wrapper from "../Layout/Wrapper";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

function NewAccount(props) {
  return (
    <Wrapper>
      <Container ofStyle="Container">
        <h1>New Account</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            variant="outlined"
            id="standard-basic"
            label="IBAN"
            style={{ width: 150, marginBottom: 18 }}
          />
          <TextField
            variant="outlined"
            id="standard-basic"
            label="Currency long"
            style={{ width: 150, marginBottom: 18 }}
          />
          <TextField
            variant="outlined"
            id="standard-basic"
            label="Currency short"
            style={{ width: 150, marginBottom: 18 }}
          />
        </div>
        <Button variant="contained" color="primary">
          Add account
        </Button>
      </Container>
    </Wrapper>
  );
}

export default NewAccount;

// id: 2,
// iban: "LT11 3211 1011 3311 0911",
// bic: "REVOLT22",
// ammount: 1490,
// expenses: 232,
// currency: "USD",
// currencyName: "United States Dollars",
// active: true,
