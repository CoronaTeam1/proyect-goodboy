import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Slice from "./Slice";
import style from "./Style";

const Carousel = () => {

  const styleClass = style();

  const data = [
    {
      url: "../../../../../images/dog1.svg",
      text:
        "Registrate para ver nuestras lecciones y comienza a educar a tu perro.",
      hidden: false
    },
    {
      url: "../../../../../images/dog2.svg",
      text:
        "Ten acceso a el clicker excelente herramienta para obtener resultados óptimos en adiestramiento en positivo. Responde a la base científica del “estímulo – respuesta”.",
      hidden: true
    },
    {
      url: "../../../../../images/dog3.svg",
      text:
        "Ponemos a tu disposición un paquete de lecciones de adiestramiento, con videos de nuestros mejores adiestradores",
      hidden: false
    },
    {
      url: "../../../../../images/dog4.svg",
      text: "Supera las lecciones y sigue el progreso de tu mascota.",
      hidden: true
    }
  ];

  const [slice, setSlice] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      slice < 3 ? setSlice(slice + 1) : setSlice(0);
    }, 4000);
    return () => clearInterval(id);
  });

  const navegation = type => {
    type === "prev" && slice > 0 && setSlice(slice - 1);
    type === "next" && slice < 3 && setSlice(slice + 1);
  };

  const index = slice => {
    switch (slice) {
      case 0:
        return "../../../../../images/marker1.png";
      case 1:
        return "../../../../../images/marker2.png";
      case 2:
        return "../../../../../images/marker3.png";
      case 3:
        return "../../../../../images/marker4.png";
    }
  };

  return (
    <>
      <Grid
        container
        row
        justify="space-between"
        alignItems="center"
        className="index-carousel"
      >
        {slice !== 0 && (<div onClick={() => navegation("prev")}><img src="../../../../../images/prev.svg" /></div>)}
        <Slice {...data[slice]} />
        {slice !== 3 && (<div onClick={() => navegation("next")}><img src="../../../../../images/next.svg" /></div>)}
      </Grid>
      <img src={index(slice)} className={styleClass.marker}/>
    </>
  );
};
export default Carousel;
