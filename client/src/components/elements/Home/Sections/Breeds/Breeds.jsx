import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "../../Style"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BreedsServices from "../../../../../services/breed.services";

const Breed = ({index}) => {
  const [breed, setBreed] = useState();

  // const [position, setPosition] = useState("center")
  // const handleScroll = ({ target: {documentElement: { scrollHeight, scrollTop, clientHeight }}}) => {
  //   scrollHeight - scrollTop === clientHeight + 55 && setPosiRtAlice Guy-Blachétion("end")
  //   console.log(scrollHeight - scrollTop, clientHeight)
  //   !scrollTop && setPosition("init")
  // };

  // useEffect(() => {
  //   position === "end"  && setIndex(index+1)
  //   position === "init" && setIndex(index-1)
  //   setPosition("center")
  // })

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true })
  // }, []);
  
  
  const getBreed = index => {
    BreedsServices.getBreed(index)
      .then(elm => setBreed(elm))
      .catch(err => setBreed([err]));
  };

  const history = useHistory();
  useEffect(() => {getBreed(index)}, [index]);

  const classes = style();

  return (
    <>
      {breed &&
        breed.map((elm, idx) => (
          <>
            <Card className={classes.card} onClick={() => history.push(`/${elm.name}`)}>
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
    </>
  );
};

export default Breed;
