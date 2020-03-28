import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import style from "./style";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const Slice = ({ url, text, number }) => {
  const styleClass = style();

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        transitionName="carousel"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        <Grid item xs={4} className="slice">
          <div className={styleClass.containerImage}>
            <img src={url} alt="dog index" className={styleClass.image} />
          </div>
          <p>{text}</p>
        </Grid>
      </CSSTransition>
    </SwitchTransition>
  );
};
export default Slice;
