import React from "react";
/* ----- RRD components ----- */
import ButtonFooter from "./ButtonFooter"
/* ----- Styles ----- */
import FooterStyle from './FooterStyle'
import authServ from '../../../services/auth.services'
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import { fetchUser } from '../../../redux'




const Footer = () => {
  const styleClass = FooterStyle();
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)


  const logout = () =>{
    authServ.logout()
    dispatch(fetchUser({name:undefined,username:undefined,dog:undefined,password:undefined,isLogged:false}))
    history.push('/auth')
  }

    return (
        <div className={styleClass.footer}>
            <ButtonFooter
              url="../../../../images/buttonHome.svg"
              title="Inicio"
            />
            <ButtonFooter
              url="../../../../images/buttonPet.svg"
              title="Mascota"
            />
            <ButtonFooter
              url="../../../../images/buttonProfile.svg"
              title="Perfil"
            />
            <div onClick={()=> logout()}>LgOut {user.name}</div>
          </div>
    );
};

export default Footer;