import React, { useReducer, useState } from './node_modules/react';
import { useDispatch, useSelector } from "./node_modules/react-redux";
import { makeStyles, FormControl, TextField, Input, InputLabel, Button, Avatar } from './node_modules/@material-ui/core'
// import REGISTER_DOG from '../../../redux/actions/actions'

const REGISTER_DOG = 'REGISTER_DOG'



const RegisterDog = () => {

    //useSelector para extraer datos de la store de Redux
    const [dogname, setDogname] = useState("")
    const [dogage, setDogage] = useState("")
    const [dogbreed, setDogbreed] = useState("")

    const dispatch = useDispatch();


    const handleChangeName = e => {
        setDogname(e.target.value)

    }
    const handleChangeAge = e => {
        setDogage(e.target.value)
    }

    const handleChangeBreed = e => {
        setDogbreed(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: REGISTER_DOG,
            payload: { dogname, dogage, dogbreed }
        })
    }


    return (
        <>
            <h1>Tu perro</h1>

            <p>Aqui la imagen</p>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" alt='Perro' />

            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <InputLabel htmlFor='dogname'>¿Cuál es el nombre de tu perro?</InputLabel>
                <FormControl fullWidth>
                    <Input
                        id='dogname'
                        style={{ margin: 8 }}
                        placeholder="Luna"
                        fullWidth
                        margin="normal"
                        value={dogname}
                        onChange={handleChangeName}
                    />
                </FormControl>
                <InputLabel htmlFor='dogage'>¿Cuál es el edad de tu perro?</InputLabel>
                <FormControl fullWidth>
                    <Input
                        id='dogage'
                        style={{ margin: 8 }}
                        placeholder="1 mes"
                        fullWidth
                        margin="normal"
                        value={dogage}
                        onChange={handleChangeAge}
                    />
                </FormControl>
                <InputLabel htmlFor='dogbreed'>¿Cuál es la raza de tu perro?</InputLabel>
                <FormControl fullWidth>
                    <Input
                        id='dogbreed'
                        style={{ margin: 8 }}
                        placeholder="Akita inui"
                        fullWidth
                        margin="normal"
                        value={dogbreed}
                        onChange={handleChangeBreed}
                    />
                </FormControl>
                <Button type='submit' variant="contained" color="primary">
                    Secondary
                </Button>
                <h1>{useSelector(state => state.dogName)} </h1>
                <p>{useSelector(state => state.dogAge)} </p>
                <p>{useSelector(state => state.dogBreed)} </p>
            </form>
        </>
    )
}

export default RegisterDog;