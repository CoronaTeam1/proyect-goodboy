import React, { useState, useEffect } from "./node_modules/react";
import { Grid } from "./node_modules/@material-ui/core";
import Slice from "./Slice";
import { useDispatch, useSelector } from "./node_modules/react-redux";

const Carousel = () => {
  const data = [
    {
      url: "../../../../images/index-dog1.jpeg",
      text: "lorenanandgsdgsdgdsjg dgsdgsidg sdig sdg sdgs",
      hidden: false
    },
    {
      url: "../../../../images/index-dog2.jpg",
      text: "faefaedjosngsjdngdjsngdm sd gs dgsdgdsgfns",
      hidden: true
    },
    {
      url: "../../../../images/index-dog3.jpg",
      text: "loafe sdgsdgsdg sdgsdgsdgdsgdsgds gsdgdsfafenans",
      hidden: false
    }
  ];

  const dispatch = useDispatch();

  useSelector(state => state.slice) === 3 && dispatch({ type: "CLEAN" });
  setInterval(() => dispatch({ type: "NEXT" }), 4000);

  const index = slice => {
    switch (slice){
      case 0: return "primero";
      case 1: return "segundo";
      case 2: return "tercero";
    }
  }

  return (
    <Grid
      container
      row
      justify="space-between"
      alignItems="center"
      className="index-carousel"
    >
      <Slice {...data[useSelector(state => state.slice)]} />
      <h2>{index(useSelector(state => state.slice))}</h2>
    </Grid>
  );
};
export default Carousel;
