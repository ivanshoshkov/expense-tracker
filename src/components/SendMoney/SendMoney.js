import React from "react";
import Container from "../Layout/Container";
import Wrapper from "../Layout/Wrapper";

function SendMoney(props) {
    console.log('title: ', props.location)
  return (
    <Wrapper>
      <Container  ofStyle='Container'>
        <h1>SEND MONEY</h1>
      </Container>
    </Wrapper>
  );
}

export default SendMoney;
