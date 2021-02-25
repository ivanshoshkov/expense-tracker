import React from "react";
import Typography from "@material-ui/core/Typography";
import classes from "./accountdetails.module.css";

function BalanceWidget() {
  return (
    <div className={classes.balance_container}>
      <div className={classes.balance_item}>
        <Typography variant="overline">Your balance is:</Typography>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Typography variant="h4" className={classes.balance_sum}>
            {Number(0).toLocaleString()}
          </Typography>
          <Typography variant="h6">XXXX</Typography>
        </div>
      </div>
      <div className={classes.balance_item}>
        <Typography variant="overline">Your expenses this month:</Typography>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Typography variant="h4" className={classes.balance_expense}>
            {Number(0).toLocaleString()}
          </Typography>
          <Typography variant="h6">XXXX</Typography>
        </div>
      </div>
    </div>
  );
}

export default BalanceWidget;
