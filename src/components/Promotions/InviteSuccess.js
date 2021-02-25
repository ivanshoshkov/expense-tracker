import React from "react";
import { Button, Typography } from "@material-ui/core";

function InviteSuccess(props) {
  return (
    <div>
      <Typography variant="h3">Success!</Typography>
      <Typography variant="body1" style={{marginTop:14}}>Your invitation has been sent!</Typography>
      <Button
          style={{ marginTop: 25 }}
          onClick={props.click}
          variant='outlined'
        >
          Close
        </Button>
    </div>
  );
}

export default InviteSuccess;
