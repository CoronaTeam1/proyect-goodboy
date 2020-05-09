import React, {useState} from 'react'
/* ----- MaterialUI ----- */
import Container from "@material-ui/core/Container";
/* ----- RRD components ----- */
import ChoserBtn from '../../ui/ChoserBtn/ChoserBtn'
import Form from './Form/Form'
/* ----- Styles ----- */
import AuthIndexStyle from './AuthIndexStyle'


const AuthIndex = () => {
    
    const [term,setTerm] = useState("signup")
    const styleClass = AuthIndexStyle();

    return(
        <>
        <div className={styleClass.choser}>
            <ChoserBtn textBtn="Registrarse" setTerm={()=> setTerm('signup')} termState={term} term={"signup"}/>
            <ChoserBtn textBtn="Iniciar Sesion" setTerm={()=> setTerm('login')} termState={term} term={"login"}/>
        </div>

        <Container>
            <Form termState = {term}/>
        </Container>

        </>

    )
}
export default AuthIndex