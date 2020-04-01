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
    console.log("hemos registrado tu perro ", userDog);
    userDog.name = "";
  };
  console.log(userDog)

  return (

    <>

      <h2>Tu perro</h2>
      <p>{userDog.name}</p>
      {/* AL SUBIR LA FOTO DE CLOUDINARY, DEBE MOSTRARSE, SINO SE MUESTRA EL "SUBIR FOTO" */}
      {
        userDog.photo ?
          (
            <Grid xs={4} className="slice center">
              <img src='../../../../../images/dog4.svg' alt="dog index" className={styleClass.image} />
            </Grid>
          )
          :
          (
            <Grid xs={4} className="slice center">
              <img src='../../../../../images/new.png' alt="dog index" className={styleClass.image} />
            </Grid>
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

        <ButtonGB className={styleClass.padding30px} type="submit" text="Continuar"></ButtonGB>
      </form>
    </>
  );
};

export default RegisterDog;
