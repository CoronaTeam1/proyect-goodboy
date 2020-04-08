import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Section from "./Sections/Sections";
import ButtonFooter from "./Footer/Buttons";
import style from "./Style";

const TransitionsModal = () => {
  const styleClass = style();
  const [open, setOpen] = useState(true);
  const [section, setSection] = useState("index");

  const handleClose = () => {
    setOpen(false);
  };

  const audio = new Audio("../../../../sound/clicker.mp3");

  console.log(section)
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
            <div>
              <h2 className={styleClass.tytle} id="transition-modal-title">
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
              <img
                className={styleClass.clicker}
                src="../../../../images/clicker.svg"
                alt="clicker"
              />
            </div>
          </div>
        </Fade>
      </Modal>
      <Grid>
        <div className={styleClass.navs}>
          <h1 className={styleClass.init}>Inicio</h1>
        </div>
      </Grid>
      <Grid className={styleClass.main}>
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
            <Section
              url="../../../../images/section3.svg"
              title="Biblioteca razas"
              event={() => setSection("breed")}
            />
          </>
        )}
        {section === "learn" && (
          <>
            <Section
              url="../../../../images/sectionInit.svg"
              title="Inicio"
              event={() => setSection("init")}
            />
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
        {section === "tips" && (
          <>
            <Section
              url="../../../../images/section1.svg"
              title="Lecciones"
              event={() => setSection("learn")}
            />
            <Section
              url="../../../../images/section2.svg"
              title="Tips crianza"
              event={() => setSection("learn")}
            />
            <Section
              url="../../../../images/section3.svg"
              title="Biblioteca razas"
              event={() => setSection("learn")}
            />
          </>
        )}
        {section === "breed" && (
          <>
            <Section
              url="../../../../images/section1.svg"
              title="Lecciones"
              event={() => setSection("learn")}
            />
            <Section
              url="../../../../images/section2.svg"
              title="Tips crianza"
              event={() => setSection("learn")}
            />
            <Section
              url="../../../../images/section3.svg"
              title="Biblioteca razas"
              event={() => setSection("learn")}
            />
          </>
        )}
        <div className="center" onClick={() => audio.play()}>
          <img src="../../../../images/clicker.svg" alt="clicker" />
        </div>
      </Grid>
      <Grid>
        <div className={styleClass.navs}>
          <div className={`flex ${styleClass.footer}`}>
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
        </div>
      </Grid>
    </div>
  );
};

export default TransitionsModal;
