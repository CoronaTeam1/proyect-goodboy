import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
/* ----- Material UI ----- */
import { Divider } from '@material-ui/core';
/* ----- Services ----- */
import BreedsServices from "../../../../../services/breed.services";
/* ----- UI components ----- */
import Header from '../../../../ui/Header/Header'
import Footer from '../../../../ui/Footer/Footer'
/* ----- Styles ----- */
import HomeStyle from "../../HomeStyle";

const BreedDetails = () => {
  const styleClass = HomeStyle();

  const { breed } = useParams();

  const [details, setDetailsBreed] = useState();


  useEffect(() => BreedsServices.getDetailsBreed(breed).then(details => setDetailsBreed(details[0])).catch(err => setDetailsBreed([err])), [breed])

  return (
    <div>
      {details ?
        (
          <>
            <Header title={breed} route="breed" />

            <div className={styleClass.mainWrapper}>
              <div className={styleClass.mainPanel}>
                <img src={details && details.image} alt={details.breed} className={styleClass.image65w}></img>
                <hr></hr>
                <Divider />
                <div className={`${styleClass.modal} ${styleClass.margin5updw}`}>
                  <img src="../../../../images/footGreen.svg" className="margin-right" alt=""/><h3 className="text">Acerca del {breed}</h3>

                </div>
                <p className="text">{details && details.description}</p>
              </div>
              <div className={styleClass.mainPanel}>
                <hr></hr>
                <Divider />
                <div className={`${styleClass.modal} ${styleClass.margin5updw}`}>
                  <img alt="foot" src="../../../../images/footGreen.svg" className="margin-right" /><h3 className="text">Caracteristicas</h3>
                </div>
                <p className="text">{details && details.info.map(elm => <p className="text">{elm}</p>)}</p>

              </div>
            </div>
          </>
        )
        :
        <p>Cargando..</p>}

      <Footer />

    </div>
  );
};

export default BreedDetails;
