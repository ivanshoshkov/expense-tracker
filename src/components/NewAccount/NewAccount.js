import React, { useState, useEffect } from "react";
import Container from "../Layout/Container";
import Wrapper from "../Layout/Wrapper";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

import currienciesjson from "./currencies.json";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function NewAccount() {
  const [curr, setCurr] = useState();
  const [age, setAge] = useState();

  useEffect(() => {
    setCurr(currienciesjson);
    console.log(curr)
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Wrapper>
      <Container ofStyle="Container">
        <h1>New Account</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            variant="outlined"
            id="standard-basic"
            label="First name"
            style={{ width: 150, marginBottom: 18 }}
          />
          <TextField
            variant="outlined"
            id="standard-basic"
            label="Last name"
            style={{ width: 150, marginBottom: 18 }}
          />
          <TextField
            variant="outlined"
            id="standard-basic"
            label="IBAN"
            style={{ width: 150, marginBottom: 18 }}
          />
          <TextField
            variant="outlined"
            id="standard-basic"
            label="BIC"
            style={{ width: 150, marginBottom: 18 }}
          />
          <FormControl
            variant="outlined"
            style={{ width: 150, marginBottom: 18 }}
          >
            <InputLabel id="demo-simple-select-outlined-label">Currency</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="Currency"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {curr && (Object.keys(curr).map((item, i) => (
                <MenuItem key={i} value={i}>
                  <div> {curr[item].name}</div>
                </MenuItem>
              )))}
            </Select>
          </FormControl>
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
