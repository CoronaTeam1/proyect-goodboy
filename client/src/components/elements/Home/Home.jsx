import React, { useState } from "react";
/* ----- MaterialUI Componets ----- */
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
/* ----- UI components ----- */
import Section from "../../ui/Sections/Sections";
import Footer from '../../ui/Footer/Footer'
import Header from '../../ui/Header/Header'
/* ----- Styles ----- */
import HomeStyle from "./HomeStyle";
/* ----- Router Components ----- */
import { Link } from "react-router-dom";


const TransitionsModal = () => {
  const styleClass = HomeStyle();

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const audio = new Audio("../../../../sound/clicker.mp3");

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description transition-modal-text"
        className={styleClass.modal}
        open={open}
        onClick={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={styleClass.paper}>

            <h2 className={styleClass.title} id="transition-modal-title">
              Este es tu Clicker!
              </h2>
            <p
              className={styleClass.description}
              id="transition-modal-description"
            >
              Pincha aqui para probarlo
              </p>
            <p className={styleClass.text} id="transition-modal-text">
              Asegurate de tener el sonido de tu móvil activado
              </p>
            <div className={styleClass.arrow}>
              <img src="../../../../images/arrow.svg" alt="arrow" />
            </div>

          </div>
        </Fade>

      </Modal>

      <Header title="Inicio" route="" />

      <div className={styleClass.mainPanel}>
          <>
          <Link to="/home-learn" className={styleClass.mainPanel}>
            <Section
              url="../../../../images/section1.svg"
              title="Lecciones"
            />
            </Link>
            <Section
              url="../../../../images/section2.svg"
              title="Tips crianza"
            />
            <Link to="/breed" className={styleClass.mainPanel}>
              <Section
                url="../../../../images/section3.svg"
                title="Biblioteca razas"
              />
            </Link>
          </>

      </div>
      <div className={styleClass.clicker} onClick={() => audio.play()}>
        <img src="../../../../images/clicker.svg" alt="clicker" />
      </div>

      <Footer />
    </div>
  );
};
export default TransitionsModal;