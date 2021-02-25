
import React from "react";
import { ReactComponent as ReactLogo } from "../uploads/logo.svg";
import classes from './Logo.module.css'

function Logo() {
  return <ReactLogo className={classes.Logo}/>;
}

export default Logo;
