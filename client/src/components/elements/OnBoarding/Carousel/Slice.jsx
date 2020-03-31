import React, { useState, useEffect } from "./node_modules/react";
import { Grid } from "./node_modules/@material-ui/core";
import style from "./Style";
import { SwitchTransition, CSSTransition } from "./node_modules/react-transition-group";

const Slice = ({ url, text, hidden }) => {
const styleClass = style();
  return (
      <CSSTransition in={hidden} timeout={{ enter: 5000, exit: 5000 }} classNames="my-node">
        <Grid xs={4} className="slice center">
          <div className={styleClass.containerImage}>
            <img src={url} alt="dog index" className={styleClass.image} />
          </div>
          <p>{text}</p>
        </Grid>
      </CSSTransition>
  );
};
export default Slice;
