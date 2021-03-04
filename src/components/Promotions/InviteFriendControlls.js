import React from "react";
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

function InviteFriendControlls(props) {
  const [error, setError] = React.useState(false);
  const [errorMessage, seterrorMessage] = React.useState();

  const [email, setEmail] = React.useState("");

  const sendEmailString = () => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      props.click();
      setError(false);
      seterrorMessage(false);
    } else {
      setError(true);
      seterrorMessage("This is not a valid email.");
    }
  };

  return (
    <>
      <Typography variant="h6">Invite a friend</Typography>
      <Typography variant="body1">
        Enter your friends email to invite them
      </Typography>
      <div style={{ marginTop: 20, display: "flex" }}>
        <TextField
          variant="outlined"
          error={error}
          id="standard-basic"
          label="Email"
          helperText={errorMessage}
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />

        <Button
          variant="outlined"
          style={{ marginTop: 15, marginLeft: 10 }}
          onClick={sendEmailString}
        >
          Send an invite
        </Button>
      </div>
    </>
  );
}

export default InviteFriendControlls;
