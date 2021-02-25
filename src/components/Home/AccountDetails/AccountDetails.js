import Container from "../../Layout/Container";
import React from "react";
import classes from "./accountdetails.module.css";

//REDUX

import ADHeader from "./ADHeader";
import Wrapper from "../../Layout/Wrapper";
import BalanceWidget from "./BalanceWidget";
import ADControlls from "./ADControlls";

function AccountDetails(props) {
  return (
    <Wrapper>
      <Container class={classes.animateup} ofStyle="Container">
        <ADHeader />
        <BalanceWidget />
        <ADControlls/>
      </Container>
    </Wrapper>
  );
}

export default AccountDetails;
