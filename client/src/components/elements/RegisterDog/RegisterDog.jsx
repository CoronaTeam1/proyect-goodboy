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
import FilesServices from '../../../services/files.services'

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

  const handleFileUpload = e => {

    const uploadData = new FormData()
    uploadData.append("imageUrl", e.target.files[0])

    FilesServices.handleUpload(uploadData)
      .then(response => {
        dispatch({
          type: REGISTER_DOG,
          field: "photo",
          value: response.secure_url
        });
      })
      .catch(error => console.log(error))

  };


  const handleSubmit = e => {
    e.preventDefault();
    registerDogBack();
    // userDog.name = "";
  };

  const registerDogBack = () => {

    RegisterDogServ.createDog(userDog)
      .then(response => {
        console.log('Tus datos están en el back', response)

      })
      .catch(error => console.log(error))

  }


  return (

    <>

      <h2>Tu perro</h2>
      <p>{userDog.name}</p>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">

        {
          userDog.photo ?
            (
              <Grid xs={4} className="slice center">
                <img src={userDog.photo} alt="dog index" className={styleClass.image} />
              </Grid>
            )
            :
            (
              <>
                <FormControl>
                  <Input
                    accept="image/*"
                    className={styleClass.input}
                    style={{ display: 'none' }}
                    type="file"
                    id="photo"
                    name="imageUrl"
                    multiple
                    value={userDog.photo}
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="photo">
                    <Button variant="raised" component="span">
                      <img src='../../../../../images/new.png' alt="dog index" />
                    </Button>
                  </label>
                </FormControl>
              </>
            )
        }




        <ToggleButtons />

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
        <div className={styleClass.padding30px}>
          <ButtonGB text="Continuar"></ButtonGB>
        </div>
      </form>
    </>
  );
};

export default RegisterDog;
