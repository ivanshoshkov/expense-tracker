import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";
import classes from "./login.module.css";
import Logo from "../Logo";
import Loader from "../Loader/Loader";

function Login(props) {
  const [state, setState] = React.useState({ checked: false });

  const [input1, setInput1] = React.useState(false);
  const [input2, setInput2] = React.useState(false);

  const toggleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const usernameHandler = (event) => {
    if (event.target.value === "123123") {
      setInput1(true);
      console.log("user:", input1);
    }
  };
  const passwordHandler = (event) => {
    if (event.target.value === "123123") {
      setInput2(true);
      console.log("pass:", input2);
    }
  };

  return (
    <div className={classes.login__container}>
      <div className={classes.login__form}>
        <Logo />
        <Typography variant="h6" style={{ marginTop: 14 }}>
          Please login
        </Typography>
        <Typography variant="caption" style={{ marginBottom: 14 }}>
          This is a dummy form. Just check the checkbox and you can log in.
        </Typography>
        <TextField
          label="Username"
          style={{ marginBottom: 14 }}
          onChange={(event) => usernameHandler(event)}
        />
        <TextField
          label="Password"
          type="password"
          style={{ marginBottom: 14 }}
          onChange={(event) => passwordHandler(event)}
        />
        <div style={{ marginBottom: 14 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={toggleInput}
                name="checked"
                color="primary"
              />
            }
            label="I confirm that the water is wet"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          disabled={state.checked === true ? false : true}
          onClick={props.click}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
