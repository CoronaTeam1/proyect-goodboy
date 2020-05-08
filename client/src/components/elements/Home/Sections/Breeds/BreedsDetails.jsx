import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HomeStyle from "../../HomeStyle";

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
            <Header title={breed} route="breed" />
            {/* <h2 className={`${styleClass.margin0}`}>{breed}</h2 > */}



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
