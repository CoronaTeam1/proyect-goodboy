import React from "react";
import { Grid } from "@material-ui/core";
import style from "./Style";
import {CSSTransition } from "react-transition-group";

const Slice = ({ url, text, hidden }) => {
  const styleClass = style();
  return (
    <CSSTransition
      in={hidden}
      timeout={{ enter: 5000, exit: 5000 }}
      classNames="my-node"
    >
      <Grid item xs={4} className="slice center">
        <img src={url} alt="dog index" className={styleClass.image} />
        <p className={styleClass.p}>{text}</p>
      </Grid>
    </CSSTransition>
  );
};
export default Slice;
