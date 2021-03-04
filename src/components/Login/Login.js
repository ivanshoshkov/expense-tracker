import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";
import classes from "./login.module.css";
import Logo from "../Logo";

function Login(props) {
  const [state, setState] = React.useState({ checked: false });

  const toggleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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
        />
        <TextField
          label="Password"
          type="password"
          style={{ marginBottom: 14 }}
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
