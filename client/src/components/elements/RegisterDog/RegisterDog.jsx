import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
/* ----- Redux ----- */
import { registerDog, setDog } from '../../../redux'
/* ----- MaterialUI Compoennts ----- */
import { FormControl, Input, InputLabel, Button, Container } from "@material-ui/core";
/* ----- UI components ----- */
import ButtonGB from '../../ui/ButtonGB/Button'
import ToggleButtons from '../../ui/ButtonGB/ButtonToggled'
/* ----- Services ----- */
import RegisterDogServ from '../../../services/registerdog.services'
import FilesServices from '../../../services/files.services'
/* ----- Styles ----- */
import style from "./RegisterDogStyles";


const RegisterDog = () => {

  const styleClass = style();

  const userDog = {
    name: useSelector(state => state.user.dog.name),
    age: useSelector(state => state.user.dog.age),
    breed: useSelector(state => state.user.dog.breed),
    genre: useSelector(state => state.user.dog.genre),
    photo: useSelector(state => state.user.dog.photo)
  };

  const history = useHistory()

  const dispatch = useDispatch();

  const handleChange = e =>  dispatch(registerDog(e.target.id, e.target.value))

  const handleFileUpload = e => {

    const uploadData = new FormData()
    uploadData.append("imageUrl", e.target.files[0])

    FilesServices.handleUpload(uploadData)
      .then(response => dispatch(registerDog("photo", response.secure_url)))
      .catch(error => console.log(error))

  };


  const handleSubmit = e => {
    e.preventDefault();
    registerDogBack();
  };

  const registerDogBack = () => {
    RegisterDogServ.createDog(userDog)
      .then(response => dispatch(setDog()))
      .then(x => history.push('/home'))
      .catch(error => console.log(error))
  }


  return (

    <Container styleClass={styleClass.fit}>
      <div className={styleClass.flexColumnCenter}>
        <h2 className={styleClass.litMargin}>{userDog.name?userDog.name:'Tu perro'}</h2>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">

          {
            userDog.photo ?(
                
                  <img src={userDog.photo} alt="dog index" className={styleClass.image} />
                
            )
            :
            (
              <div className={styleClass.flexCenter}>
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
              </div>
            )
          }

          <ToggleButtons />
          <div className={styleClass.textLeft}>

            <InputLabel htmlFor="dogname" className='bold mt1'> ¿Cuál es el nombre de tu perro? </InputLabel>

            <FormControl fullWidth margin='normal'>
              <Input
                id="name"
                placeholder="Luna"
                margin="normal"
                value={userDog.name}
                onChange={handleChange}
              />
            </FormControl>


            <InputLabel htmlFor="dogage" className='bold mt1' >¿Cuál es el edad de tu perro?</InputLabel>

            <FormControl fullWidth margin='normal'>
              <Input
                id="age"
                placeholder="1 mes"
                value={userDog.age}
                onChange={handleChange}
              />


            </FormControl>
            <InputLabel htmlFor="dogbreed" className='bold mt1'> ¿Cuál es la raza de tu perro? </InputLabel>

            <FormControl fullWidth margin='normal'>
              <Input
                id="breed"
                placeholder="Akita inui"
                value={userDog.breed}
                onChange={handleChange}
              />
            </FormControl>
          </div>
         


          <div className={styleClass.btPadding} onClick={handleSubmit}>
            <ButtonGB text="Continuar"></ButtonGB>
          </div>
        </form>
      </div>
      
    </Container>
  );
};

export default RegisterDog;
