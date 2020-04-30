import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "../../HomeStyle";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import BreedsServices from "../../../../../services/breed.services";
import Footer from '../../../../ui/Footer/Footer'
import Header from '../../../../ui/Header/Header'


const Breed = () => {
  const [breed, setBreed] = useState();
  const [index, setIndex] = useState(0);

  const getBreed = index => {
    BreedsServices.getBreed(index)
      .then(elm => setBreed(elm))
      .catch(err => setBreed([err]));
  };

  const history = useHistory();
  
  useEffect(() => {
    getBreed(index);
  }, [index]);

  const classes = style();

  return (
    <>
    <Header title="Biblioteca de razas"/>
      {breed &&
        breed.map((elm, idx) => (
          <>
            <Card
              className={classes.card}
              onClick={() => history.push(`/breed/${elm.name}`)}
            >
              <CardActionArea className={classes.contentCard}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="100"
                  image={elm.image}
                  title="Contemplative Reptile"
                  className={classes.imgCard}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {elm.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </>
        ))}
          <div className="flex">
              <div onClick={() => setIndex(index + 1)}><img src="../../../../images/prev.svg" alt="" /></div>
              <div onClick={() => setIndex(index - 1)}><img src="../../../../images/next.svg" alt="" /></div>
          </div>
        <Footer /> 
    </>
  );
};

export default Breed;
