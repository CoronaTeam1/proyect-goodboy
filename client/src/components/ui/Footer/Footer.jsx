import React from "react";
/* ----- RRD components ----- */
import ButtonFooter from "./ButtonFooter"
/* ----- Styles ----- */
import FooterStyle from './FooterStyle'

const Footer = () => {
  const styleClass = FooterStyle();

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
          </div>
    );
};

export default Footer;