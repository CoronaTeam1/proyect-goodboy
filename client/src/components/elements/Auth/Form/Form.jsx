import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { registerUser,fetchUser } from '../../../../redux'

import { useHistory } from "react-router-dom";

//Material UI
import {FormControl, Input, InputLabel, IconButton,InputAdornment } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
//Styles
import FormStyle from './FormStyle'
import '../../../../App.css'
//Services
import authServ from '../../../../services/auth.services'
//Components
import ButtonGB from '../../../ui/ButtonGB/Button'

// const REGISTER_USER = "REGISTER_USER"; Esto no hace falta porque ya lo importamos en la linea 3

const Form = ({termState}) => {

    // ---- HOOKS ----
    const styleForm = FormStyle();

    const initialState = {
        showPassword: false,
        showError:false
      }

    const [values, setValues] = React.useState(initialState);
    const history = useHistory()

    //--- REDUX ---

    const userMK = useSelector(state => state.user)

    const userRedux = {
        name: useSelector(state => state.user.name),
        username: useSelector(state => state.user.username),
        password: useSelector(state => state.user.password),
        checkPassword: useSelector(state => state.user.checkPassword)
      };

      const dispatch = useDispatch();
    
      const handleChange = e => {
              
        // dispatch({
        //   type: REGISTER_USER,
        //   field: e.target.name,
        //   value: e.target.value
        // });

        dispatch(registerUser(e.target.name,e.target.value))

        //Como ahora action es una funcion, mandamos en primera posicion el field, en segunda el value porque lo hemos definido asi

      };
    
      const handleSubmit = e => {

        if(termState==='signup'){

            if(userRedux.password!==userRedux.checkPassword){
                setValues({ ...values, showError: true })
            }else{
                setValues({ ...values, showError: false })
                console.log('WORK')
                console.log("Esto es lo que hay en redux : ", userRedux)
                registerUserBack()
            }  
        }else{
            loginUser()
        }
        
      };

      const registerUserBack = () => {
        authServ.registerUser(userRedux)
            .then(response => console.log("He enviado esto al back", response))
            .then(x => history.push('/register-dog'))
            .catch(err => console.log(err))
      }

      const loginUser = () => {
          authServ.loginUser(userRedux)
          .then(response => dispatch(fetchUser(response),console.log(response,'esto es lo que hay en la response')))
          .then(x => console.log('Esto lo que hay en en store',userMK))
          .then(x => history.push('/home'))
          .catch(err => console.log(err))


      }

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
                        id="username"
                        name="username"
                        placeholder="example@myemail.com"
                        value={userRedux.username}
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
                        <ButtonGB  text="Registrate Ahora" link={'/home'}/>
                    </div>
                    
                    {/* <p className={styleForm.socialLoginP}>También puedes registrarte con</p>

                    <div className={styleForm.socialLoginDiv}>
                        <div>Logo 1</div>
                        <div>Logo 2</div>
                    </div> */}

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
                        id="username"
                        name="username"
                        placeholder="example@myemail.com"
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

                    <div className="mt2" onClick={handleSubmit}>
                        <ButtonGB type='submit' text="Inicia Sesión"/>
                    </div>
                    
                    {/* <p className={styleForm.socialLoginP}>También puedes iniciar sesión con</p>

                    <div className={styleForm.socialLoginDiv}>
                        <div>Logo 1</div>
                        <div>Logo 2</div>
                    </div> */}

                </form>
            </div>
        )
    }
}

export default Form