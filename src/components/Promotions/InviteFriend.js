import { Button, Typography } from "@material-ui/core";
import React from "react";
import Container from "../Layout/Container";
import Wrapper from "../Layout/Wrapper";
import InviteFriendControlls from "../Promotions/InviteFriendControlls";
import { ReactComponent as ComponentImage } from "../../uploads/promotion-invite.svg";
import InviteSuccess from "./InviteSuccess";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function InviteFriend() {
  const [show, setShow] = React.useState(true);
  const [nextStep, setnextStep] = React.useState(0);
  const [snackbar, setSnackbar] = React.useState(false);

  const FirstStep = () => {
    return (
      <div>
        <Typography variant="h4">
          Hey, don't forget to invite a friend!
        </Typography>
        <Typography variant="h5" style={{ marginTop: 10 }}>
          It's allways better with company.
        </Typography>
        <Button
          // component={Link}
          // to="/invite-friend"
          variant="outlined"
          style={{ marginTop: 25 }}
          onClick={() => {
            setnextStep(1);
          }}
        >
          Invite a friend
        </Button>
        <Button
          style={{ marginTop: 25, marginLeft: 10 }}
          onClick={() => {
            setShow(false);
          }}
        >
          Close
        </Button>
      </div>
    );
  };

  function setNexStepHandler() {
    setSnackbar(true);
    setnextStep(2);
    console.log(snackbar);
  }

  const InviteFriendSteps = (props) => {
    if (nextStep === 0) {
      return <FirstStep />;
    } else if (nextStep === 1) {
      return (
        <InviteFriendControlls
          click={() => setNexStepHandler()}
          snackbarOpen={snackbar}
          toggleSnackbar={() => setSnackbar(false)}
        />
      );
    } else if (nextStep === 2) {
      return (
        <InviteSuccess
          click={() => {
            setShow(false);
          }}
        />
      );
    }
  };

  return (
    show && (
      <Wrapper>
        <Container ofStyle="Container">
          <InviteFriendSteps />
          <ComponentImage
            style={{ position: "absolute", bottom: 0, right: 8, zIndex: 2 }}
          />
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            open={snackbar}
            onClose={() => setSnackbar(false)}
            autoHideDuration={3000}
            message="Invitation sent successfully!"
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
    )
  );
}

export default InviteFriend;
