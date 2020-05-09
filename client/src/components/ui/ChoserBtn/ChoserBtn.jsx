import React from 'react'
/* ----- Styles ----- */
import ChoserBtnStyle from './ChoserBtnStyle'

const ChoserBtn = ({textBtn,setTerm,termState,term}) => {

    const styleClass = ChoserBtnStyle()

    const handleClick = () => setTerm()

    return <div 
    className = {termState===term? styleClass.selectedChoserBtn : styleClass.choserBtn} 
    onClick= {handleClick}>{textBtn}
    </div>    
}
export default ChoserBtn