import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import classes from "./accountdetails.module.css";
import { connect } from "react-redux";
import Loader from "../../Loader/Loader";
function BalanceWidget(props) {
  const [state, setstate] = useState();

  useEffect(() => {
    setstate(props.returnedState.selectedAccount);
  }, [props]);

  return state ? (
    props.show ? (
      <div className={classes.balance_container}>
        <div className={classes.balance_item}>
          <Typography variant="overline">Your balance is:</Typography>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <Typography variant="h4" className={classes.balance_sum}>
              {Number(state.ammount).toLocaleString()}
            </Typography>
            <Typography variant="h6">{state.currency}</Typography>
          </div>
        </div>
        <div className={classes.balance_item}>
          <Typography variant="overline">Your expenses this month:</Typography>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <Typography variant="h4" className={classes.balance_expense}>
              {Number(state.expenses).toLocaleString()}
            </Typography>
            <Typography variant="h6">{state.currency}</Typography>
          </div>
        </div>
      </div>
    ) : null
  ) : (
    <Loader />
  );
}

function mapStateToProps(state) {
  const returnedState = state;
  return { returnedState };
}

export default connect(mapStateToProps)(BalanceWidget);
