import Container from "../../Layout/Container";
import React, { useState } from "react";
import classes from "./accountdetails.module.css";

//REDUX

import ADHeader from "./ADHeader";
import Wrapper from "../../Layout/Wrapper";
import BalanceWidget from "./BalanceWidget";
import ADControlls from "./ADControlls";

function AccountDetails(props) {
  const [showBalance, setShowBalance] = useState(true);
  return (
    <Wrapper>
      <Container class={classes.animateup} ofStyle="Container">
        <ADHeader show={showBalance} toggleBalance={() => setShowBalance((balance) => !balance)} />
        <BalanceWidget show={showBalance} />
        <ADControlls />
      </Container>
    </Wrapper>
  );
}

export default AccountDetails;
