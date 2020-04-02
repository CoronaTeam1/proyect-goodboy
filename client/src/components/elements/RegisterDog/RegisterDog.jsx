import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  FormControl,
  TextField,
  Input,
  InputLabel,
  Button,
  Avatar,
  Grid
} from "@material-ui/core";
import ButtonGB from '../../ui/ButtonGB/Button'
import ToggleButtons from '../../ui/ButtonGB/ButtonToggled'
import style from "./Style";
import RegisterDogServ from '../../../services/registerdog.services'


const REGISTER_DOG = "REGISTER_DOG";

const RegisterDog = () => {

  const styleClass = style();

  const userDog = {
    name: useSelector(state => state.name),
    age: useSelector(state => state.age),
    breed: useSelector(state => state.breed),
    genre: useSelector(state => state.genre),
    photo: useSelector(state => state.photo)
  };
  const [submitted, setSubmitted] = useState(false)


  console.log(userDog)


  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch({
      type: REGISTER_DOG,
      field: e.target.id,
      value: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit")
    registerDogBack();
    // userDog.name = "";
  };

  const registerDogBack = () => {
    console.log("entra", userDog)
    // const { name, age, breed, genre, photo } = userDog

    RegisterDogServ.createDog(userDog)
      .then(response => {
        console.log('Tus datos están en el back', response)
        // setSubmitted(true)

      })
      .catch(error => console.log(error))

  }


  return (

    <>

      <h2>Tu perro</h2>
      <p>{userDog.name}</p>
      {/* AL SUBIR LA FOTO DE CLOUDINARY, DEBE MOSTRARSE, SINO SE MUESTRA EL "SUBIR FOTO" */}
      {
        userDog.photo ?
          (
            <Grid xs={4} className="slice center">
              <img src='../../../../../images/dog4.svg' alt="dog index" />
            </Grid>
          )
          :
          (
            <>
              <input
                accept="image/*"
                className={styleClass.input}
                style={{ display: 'none' }}
                id="photo-file"
                multiple
                type="file"
              />
              <label htmlFor="photo-file">
                <Button variant="raised" component="span">
                  <img src='../../../../../images/new.png' alt="dog index" />
                </Button>
              </label>
            </>
          )
      }





      <ToggleButtons />

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <InputLabel htmlFor="dogname">
          ¿Cuál es el nombre de tu perro?
        </InputLabel>
        <FormControl fullWidth>
          <Input
            id="name"
            style={{ margin: 8 }}
            placeholder="Luna"
            fullWidth
            margin="normal"
            value={userDog.name}
            onChange={handleChange}
            padding="25px"
          />
        </FormControl>
        <InputLabel htmlFor="dogage">¿Cuál es el edad de tu perro?</InputLabel>
        <FormControl fullWidth>
          <Input
            id="age"
            style={{ margin: 8 }}
            placeholder="1 mes"
            fullWidth
            margin="normal"
            value={userDog.age}
            onChange={handleChange}
          />
        </FormControl>
        <InputLabel htmlFor="dogbreed">
          ¿Cuál es la raza de tu perro?
        </InputLabel>
        <FormControl fullWidth>
          <Input
            id="breed"
            style={{ margin: 8 }}
            placeholder="Akita inui"
            fullWidth
            margin="normal"
            value={userDog.breed}
            onChange={handleChange}
          />
        </FormControl>
        {/* <button type="submit">ENVIAR</button> */}
        <ButtonGB className={styleClass.padding30px} text="Continuar"></ButtonGB>
      </form>
    </>
  );
};

export default RegisterDog;
