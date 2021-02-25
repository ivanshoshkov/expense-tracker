import React from "react";
import classes from "./Container.module.css";
function Container(props) {
  return (
    <div className={classes[props.ofStyle]}>
      {props.children}
    </div>
  );
}

export default Container;
