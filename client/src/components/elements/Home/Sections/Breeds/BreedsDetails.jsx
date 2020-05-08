import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
                <img src={details && details.image} alt={details.breed} className={styleClass.image100}></img>
                <hr></hr>
                <h3>Acerca del {breed}</h3>
                <p>{details && details.description}</p>
              </div>
              <div className={styleClass.mainPanel}>
                <hr></hr>
                <h3>Caracteristicas</h3>
                <p>{details && details.info.map(elm => <p>{elm}</p>)}</p>

                <p>TERELERE</p>
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
