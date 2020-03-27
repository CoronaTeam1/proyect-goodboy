import React from 'react';
import { makeStyles, FormControl, TextField, Input, InputLabel, Button, Avatar } from '@material-ui/core'



const RegisterDog = () => {


    return (
        <>
            <h1>Tu perro</h1>

            <p>Aqui la imagen</p>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" alt='Perro' />

            <form noValidate autoComplete="off">
                <InputLabel htmlFor='dogname'>¿Cuál es el nombre de tu perro?</InputLabel>
                <FormControl fullWidth>
                    <Input
                        id='dogname'
                        style={{ margin: 8 }}
                        placeholder="Luna"
                        fullWidth
                        margin="normal"
                    />
                </FormControl>
                <InputLabel htmlFor='dogname'>¿Cuál es el edad de tu perro?</InputLabel>
                <FormControl fullWidth>
                    <Input
                        id='dogname'
                        style={{ margin: 8 }}
                        placeholder="1 mes"
                        fullWidth
                        margin="normal"
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
                    />
                </FormControl>
                <Button variant="contained" color="primary">
                    Secondary
                </Button>
            </form>
        </>
    )
}

export default RegisterDog;