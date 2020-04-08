import React, {useReducer, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";

import FormStyle from './FormStyle'
import '../../../../App.css'

import { makeStyles, FormControl, Input, InputLabel, IconButton,InputAdornment } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import ButtonGB from '../../../ui/ButtonGB/Button'

const REGISTER_USER = "REGISTER_USER";

const Form = ({termState}) => {

    const styleForm = FormStyle();

    const initialState = {
        showPassword: false,
        showError:false
      }

    const [values, setValues] = React.useState(initialState);

    const userRedux = {
        name: useSelector(state => state.name),
        email: useSelector(state => state.email),
        password: useSelector(state => state.password),
        checkPassword: useSelector(state => state.checkPassword)
      };

      console.log(values)

      const dispatch = useDispatch();
    
      const handleChange = e => {
        //   setValues({ ...values, [e.target.name]: e.target.value });
          
        dispatch({
          type: REGISTER_USER,
          field: e.target.id,
          value: e.target.value
        });

      };
    
      const handleSubmit = e => {
        userRedux.password!==userRedux.checkPassword?setValues({ ...values, showError: true }):setValues({ ...values, showError: false });

        console.log('WORK')
        // console.log("hemos mandado a user a redux ", userRedux);
        // values.name = "";
      };

      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      

    if(termState === 'signup'){
        return(
            <div className={styleForm.flexAdjust}>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">

                    <InputLabel htmlFor="name" className='bold mt1'> Nombre </InputLabel>

                    <FormControl fullWidth margin="normal">
                    <Input
                        id="name"
                        name="name"
                        placeholder="Luna"
                        value={userRedux.name}
                        onChange={handleChange}
                    />
                    </FormControl>


                    <InputLabel htmlFor="email" className='bold mt1' >E-mail</InputLabel>

                    <FormControl fullWidth margin="normal">
                    <Input
                        id="email"
                        name="email"
                        placeholder="example@myemail.com"
                        margin="normal"
                        value={userRedux.email}
                        onChange={handleChange}
                    />
                    </FormControl>


                    <InputLabel htmlFor="password" className='bold mt1'> Contraseña </InputLabel>

                    <FormControl fullWidth margin="normal">
                    <Input
                        id="password"
                        name="password"
                        type={values.showPassword? 'text': 'password'}
                        placeholder=""
                        margin="normal"
                        value={userRedux.password}
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}>

                                {values.showPassword ? <Visibility /> : <VisibilityOff />}

                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    </FormControl>


                    <InputLabel htmlFor="checkPassword" className='bold mt1'> Repite contraseña </InputLabel>

                    <FormControl fullWidth margin="normal">
                    <Input
                        id="checkPassword"
                        name="checkPassword"
                        type={values.showPassword? 'text': 'password'}
                        placeholder=""
                        value={userRedux.checkPassword}
                        onChange={handleChange}
                    />
                    </FormControl>

                    {values.showError===false?<p></p>:<p className={styleForm.socialLoginP}>Las Contraseñas no coinciden</p>}

                    <p className={styleForm.continueDiclaimer}>Al continuar aceptas los Términos y Política de privacidad</p>
                    
                    <div onClick={()=> handleSubmit()}>
                        <ButtonGB  text="Registrate Ahora"/>
                    </div>
                    
                    <p className={styleForm.socialLoginP}>También puedes registrarte con</p>

                    <div className={styleForm.socialLoginDiv}>
                        <div>Logo 1</div>
                        <div>Logo 2</div>
                    </div>

                </form>
            </div>
        )
    }else{
        return(
            <div className={styleForm.flexAdjustLogin}>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">

                    <InputLabel htmlFor="email" className='bold mt1' >E-mail</InputLabel>

                    <FormControl fullWidth margin="normal">
                    <Input
                        id="email"
                        name="email"
                        placeholder="example@myemail.com"
                        margin="normal"
                        value={userRedux.email}
                        onChange={handleChange}
                    />
                    </FormControl>


                    <InputLabel htmlFor="password" className='bold mt1'> Contraseña </InputLabel>

                    <FormControl fullWidth margin="normal">
                    <Input
                        id="password"
                        name="password"
                        type={values.showPassword? 'text': 'password'}
                        placeholder=""
                        margin="normal"
                        value={userRedux.password}
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}>

                                {values.showPassword ? <Visibility /> : <VisibilityOff />}

                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    </FormControl>

                    <div className="mt2">
                        <ButtonGB type='submit' text="Inicia Sesión"/>
                    </div>
                    
                    <p className={styleForm.socialLoginP}>También puedes iniciar sesión con</p>

                    <div className={styleForm.socialLoginDiv}>
                        <div>Logo 1</div>
                        <div>Logo 2</div>
                    </div>

                </form>
            </div>
        )
    }
}

export default Form