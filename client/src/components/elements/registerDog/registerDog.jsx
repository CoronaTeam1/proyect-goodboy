import React, { useReducer, useState } from 'react';
import { makeStyles, FormControl, TextField, Input, InputLabel, Button, Avatar } from '@material-ui/core'
// import REGISTER_DOG from '../../../redux/actions/actions'

const initialState = {
    dogname: '',
    dogage: '',
    dogbreed: ''
}

const REGISTER_DOG = 'REGISTER_DOG'
const reducer = (state, action) => {
    if (action.type === REGISTER_DOG) {
        return {
            ...state,
            [action.field]: action.value,
        }
    } else {
        return state
    }
}

const RegisterDog = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = e => {
        const { dogname, dogage, dogbreed } = state
        e.preventDefault();
        console.log(`${dogname}, ${dogage}, ${dogbreed}`)
    }

    const handleChangeInput = e => {
        dispatch({
            type: REGISTER_DOG,
            field: e.target.id,
            value: e.target.value
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
                        value={state.dogname}
                        onChange={handleChangeInput}
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
                        value={state.doage}
                        onChange={handleChangeInput}

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
                        value={state.dogbreed}
                        onChange={handleChangeInput}
                    />
                </FormControl>
                <Button type='submit' variant="contained" color="primary">
                    Secondary
                </Button>
            </form>
        </>
    )
}

export default RegisterDog;