import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  makeStyles,
  FormControl,
  TextField,
  Input,
  InputLabel,
  Button,
  Avatar
} from "@material-ui/core";

const REGISTER_DOG = "REGISTER_DOG";

const RegisterDog = () => {


  const userDog = {
    name: useSelector(state => state.dogName),
    age: useSelector(state => state.dogAge),
    breed: useSelector(state => state.dogBreed)
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

  return (
    <>
      <h1>Tu perro</h1>

      <p>Aqui la imagen</p>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" alt="Perro" />

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <InputLabel htmlFor="dogname">
          ¿Cuál es el nombre de tu perro?
        </InputLabel>
        <FormControl fullWidth>
          <Input
            id="dogName"
            style={{ margin: 8 }}
            placeholder="Luna"
            fullWidth
            margin="normal"
            value={userDog.name}
            onChange={handleChange}
          />
        </FormControl>
        <InputLabel htmlFor="dogage">¿Cuál es el edad de tu perro?</InputLabel>
        <FormControl fullWidth>
          <Input
            id="dogAge"
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
            id="dogBreed"
            style={{ margin: 8 }}
            placeholder="Akita inui"
            fullWidth
            margin="normal"
            value={userDog.breed}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Secondary
        </Button>
      </form>
    </>
  );
};

export default RegisterDog;
