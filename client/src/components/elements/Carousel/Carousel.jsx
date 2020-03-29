import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Slice from "./Slice";
import { useDispatch, useSelector } from "react-redux";

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

  return (
    <Grid
      container
      row
      justify="space-between"
      alignItems="center"
      className="index-carousel"
    >
      <Slice {...data[useSelector(state => state.slice)]} />
    </Grid>
  );
};
export default Carousel;
