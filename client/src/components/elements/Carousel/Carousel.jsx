import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Slice from "./Slice";
import style from "./style";
import { useDispatch, useSelector } from "react-redux";


const Carousel = () => {

  const [data, useData] = useState([
    { url: "../../../../images/index-dog1.jpeg", text: "lorenanandgsdgsdgdsjg dgsdgsidg sdig sdg sdgs" },
    { url: "../../../../images/index-dog2.jpg", text: "faefaedjosngsjdngdjsngdm sd gs dgsdgdsgfns" },
    { url: "../../../../images/index-dog3.jpg", text: "loafe sdgsdgsdg sdgsdgsdgdsgdsgds gsdgdsfafenans" }
  ]);

  const dispatch = useDispatch()


  return (
    <Grid container row justify="space-between"
      alignItems="center" className="index-carousel">
      <button onClick={() => dispatch({type: "PREV"})}>anterior</button>
      <Slice {...data[useSelector(state => state.slice)]}/>
      <button onClick={() => dispatch({type: "NEXT"})}>siguiente</button>
    </Grid>
  );
};
export default Carousel;
