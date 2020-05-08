import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HomeStyle from "../../HomeStyle";
import { Divider } from '@material-ui/core';
import BreedsServices from "../../../../../services/breed.services";

import Header from '../../../../ui/Header/Header'
import Footer from '../../../../ui/Footer/Footer'

const BreedDetails = () => {
  const styleClass = HomeStyle();

  const { breed } = useParams();

  const [details, setDetailsBreed] = useState();


  useEffect(() => { BreedsServices.getDetailsBreed(breed).then(details => setDetailsBreed(details[0])).catch(err => setDetailsBreed([err])) }, [])

  // const getDetailsBreed = breed => {
  //   console.log(breed);
  //   BreedsServices.getDetailsBreed(breed)
  //     .then(response => setDetailsBreed(response[0]))
  //     .catch(err => setDetailsBreed([err]));
  // };

  console.log(details)
  return (
    <div>
      {/* <button onClick={() => getDetailsBreed(breed)}>Detalles raza</button> */}
      {details ?
        (
          <>
            <Header title={breed} />
            {/* <h2 className={`${styleClass.margin0}`}>{breed}</h2 > */}



            <div className={styleClass.mainWrapper}>
              <div className={styleClass.mainPanel}>
                <img src={details && details.image} alt={details.breed} className={styleClass.image65w}></img>
                <hr></hr>
                <Divider />
                <div className={`${styleClass.modal} ${styleClass.margin5updw}`}>
                  <img src="../../../../images/footGreen.svg" className="margin-right" /><h3 className="text">Acerca del {breed}</h3>

                </div>
                <p className="text">{details && details.description}</p>
              </div>
              <div className={styleClass.mainPanel}>
                <hr></hr>
                <Divider />
                <div className={`${styleClass.modal} ${styleClass.margin5updw}`}>
                  <img src="../../../../images/footGreen.svg" className="margin-right" /><h3 className="text">Caracteristicas</h3>
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
