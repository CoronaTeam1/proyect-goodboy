import React, {useState, useEffect } from "react";
import { Grid } from "@material-ui/core";




const Carousel = () => {

  const [current, setCurrent] = useState(0);

// useEffect(() => {
//     const next = (current + 1) % slides.length;
//     const id = setTimeout(() => setCurrent(next), time);
//     return () => clearTimeout(id);
//   }, [current])

  return(<Grid item className="index-carousel">
<h1>hola {current}</h1>
  </Grid>
)}
export default Carousel;
