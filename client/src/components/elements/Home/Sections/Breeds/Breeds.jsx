import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import HomeStyle from '../../HomeStyle'

import BreedsServices from "../../../../../services/breed.services";

import Header from '../../../../ui/Header/Header'
import Footer from '../../../../ui/Footer/Footer'

import { useDispatch, useSelector } from 'react-redux'
import { registerIndex } from '../../../../../redux/index/indexAction'

const Breed = () => {
  const styleClass = HomeStyle();

  const [breed, setBreed] = useState();

  const index = useSelector(state => state.index.index)

  const dispatch = useDispatch()
  const history = useHistory();

  const getBreed = index => {
    BreedsServices.getBreed(index)
      .then(elm => setBreed(elm))
      .catch(err => setBreed([err]));
  };

  useEffect(() => {
    getBreed(index);

  }, [index]);



  return (

    <>
      <Header title="Biblioteca de razas" route="home" />

      <div className={styleClass.mainWrapper}>
        {breed &&
          breed.map((elm, idx) => (
            <>
              <Card
                className={styleClass.card}
                onClick={() => history.push(`/breed/${elm.name}`)}
              >
                <CardActionArea className={styleClass.contentCard}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="auto"
                    image={elm.image}
                    title="Contemplative Reptile"
                    className={styleClass.image65w}
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

          <div onClick={() => dispatch(registerIndex(index - 1))}>{index === 0 ? null : (<img src="../../../../images/prev.svg" alt="previous" />)}</div>


          <div onClick={() => dispatch(registerIndex(index + 1))}>{index === 15 ? null : (<img src="../../../../images/next.svg" alt="next" />)}</div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Breed;
