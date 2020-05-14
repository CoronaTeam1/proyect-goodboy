import React,{useState} from "react";
/* ----- RRD components ----- */
import ButtonFooter from "./ButtonFooter"
/* ----- Styles ----- */
import FooterStyle from './FooterStyle'
import authServ from '../../../services/auth.services'
import { useHistory } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import { fetchUser,changeTerm} from '../../../redux'




const Footer = () => {
  const styleClass = FooterStyle();
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const term = useSelector(state => state.term)
  console.log(term,'Aqui tiene que haber algo')


  const logout = () =>{
    authServ.logout()
    dispatch(fetchUser({name:undefined,username:undefined,dog:undefined,password:undefined,isLogged:false}))
    history.push('/auth')
  }

    return (
        <div className={styleClass.footer}>
        
          <ButtonFooter
            selectedImg="../../../../images/buttonHome.svg"
            deselectedImg='../../../../images/homeDeselected.svg'
            title="Inicio"
            term={term}
            uri='/home'
            setTerm={()=> dispatch(changeTerm('/home'))}
          />
          <ButtonFooter
            selectedImg='../../../../images/footSelected.svg'
            deselectedImg="../../../../images/buttonPet.svg"
            title="Mascota"
            term={term}
            uri='/breed'
            setTerm={()=> dispatch(changeTerm('/breed'))}

          />
          
          <div onClick={()=> logout()}>Log Out<br/> {user.name}</div>
            
          </div>
    );
};

export default Footer;