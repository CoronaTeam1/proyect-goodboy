import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import style from "./Style";


export default function TransitionsModal() {
  const styleClass = style();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

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
              <p className={styleClass.description} id="transition-modal-description">Pincha aqui para probarlo</p>
              <p className={styleClass.text} id="transition-modal-text">
                Asegurate de tener el sonido de tu móvil activado
              </p>
              <div className={styleClass.arrow}>
              <img src="../../../../images/arrow.svg" alt="arrow"/>
                          </div>
              <img className={styleClass.clicker} src="../../../../images/clicker.svg" alt="clicker" />
          </div>
            </div>
        </Fade>
      </Modal>
      <Grid>
              <div className={styleClass.header}>
    <h1 className={styleClass.init}>Inicio</h1>
</div>
      </Grid>
    </div>
  );
}
