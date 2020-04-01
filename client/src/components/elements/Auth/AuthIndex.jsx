import React from 'react'
import AuthIndexStyle from './AuthIndexStyle'
import ChoserBtn from './ChoserBtn/ChoserBtn'
const AuthIndex = () => {

    const styleClass = AuthIndexStyle();

    return(
        <div className={styleClass.choser}>
            <ChoserBtn text="Registrarse" />
            <ChoserBtn text="Iniciar Sesion" />
        </div>
    )
}
export default AuthIndex