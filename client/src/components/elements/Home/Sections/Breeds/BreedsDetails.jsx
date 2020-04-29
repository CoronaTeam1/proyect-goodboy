import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HomeStyle from "../../HomeStyle";

import BreedsServices from "../../../../../services/breed.services";

import Footer from '../../../../ui/Footer/Footer'

const BreedDetails = () => {
  const styleClass = HomeStyle();

  const { breed } = useParams();

  const [details, setDetailsBreed] = useState();


  useEffect(() => { BreedsServices.getDetailsBreed(breed).then(details => setDetailsBreed(details)).catch(err => setDetailsBreed([err])) }, [])

  // const getDetailsBreed = breed => {
  //   console.log(breed);
  //   BreedsServices.getDetailsBreed(breed)
  //     .then(response => setDetailsBreed(response))
  //     .catch(err => setDetailsBreed([err]));
  // };

  console.log(details)
  return (
    <div>
      {details ?
        (
          <>
            <div className={styleClass.topHeading} >
              <h2 className={`${styleClass.margin0}`}>{breed}</h2 >
            </div>


            {/* <button onClick={() => getDetailsBreed(breed)}>Detalles raza</button> */}

            <div className={styleClass.mainPanel}>
              <img src={details && details.image} alt={details.breed} className={styleClass.image100}></img>
              <p>{details && details.description}</p>
            </div>
            <div className={styleClass.mainPanel}>
              <p>{details && details.info.map(elm => <li>{elm}</li>)}</p>


              <p>TERELERE</p>
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
