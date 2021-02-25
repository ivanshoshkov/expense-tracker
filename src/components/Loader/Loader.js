import React from "react";
import { ReactComponent as LoaderSVG } from "../../uploads/loader.svg";
import Typography from "@material-ui/core/Typography";

import classes from "./loader.module.css";

function Loader() {
  return (
    <div className={classes.loadercontainer}>
      <LoaderSVG className={classes.loader} />
      <Typography variant="body1" className={classes.loaderSubtitle}>
        Loading. Please wait.
      </Typography>
    </div>
  );
}

export default Loader;
