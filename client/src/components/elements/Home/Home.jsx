import React, { useState } from "react";
// import { Grid, Container } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Section from "./Sections/Sections";
import Footer from '../../ui/Footer/Footer'
import HomeStyle from "./HomeStyle";
import { Link } from "react-router-dom";
import Header from '../../ui/Header/Header'

const TransitionsModal = () => {
    const styleClass = HomeStyle();

    const [open, setOpen] = useState(true);
    const [section, setSection] = useState("index");
   

    const handleClose = () => {
        setOpen(false);
    };

    const audio = new Audio("../../../../sound/clicker.mp3");

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        aria-describedby="transition-modal-text"
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
            {/* <img
                className={styleClass.clicker}
                src="../../../../images/clicker.svg"
                alt="clicker"
              /> */}

                    </div>
                </Fade>

            </Modal>

          <Header title="Inicio"/>

            <div className={styleClass.mainPanel}>
                {section === "index" && (
                    <>
                        <Section
                            url="../../../../images/section1.svg"
                            title="Lecciones"
                            event={() => setSection("learn")}
                        />
                        <Section
                            url="../../../../images/section2.svg"
                            title="Tips crianza"
                            event={() => setSection("tips")}
                        />
                        <Link to="/breed" className={styleClass.mainPanel}>
                        <Section
                            url="../../../../images/section3.svg"
                            title="Biblioteca razas"
                            event={() => setSection("breed")}
                        />
                        </Link>
                    </>
                )}
                {section === "learn" && (
                    <>
                        <Link to="/init-learn" className={styleClass.mainPanel}>
                        <Section
                            url="../../../../images/sectionInit.svg"
                            title="Inicio"
                            event={() => setSection("init")}
                        />
                        </Link>
                        <Section
                            url="../../../../images/sectionBasic.svg"
                            title="Básicas"
                            event={() => setSection("basic")}
                        />
                        <Section
                            url="../../../../images/sectionAdvance.svg"
                            title="Avanzadas"
                            event={() => setSection("advance")}
                        />
                    </>
                )}
            </div>
            <div className={styleClass.clicker} onClick={() => audio.play()}>
                <img src="../../../../images/clicker.svg" alt="clicker" />
            </div>

            <Footer />
        </div>
    );
};
export default TransitionsModal;