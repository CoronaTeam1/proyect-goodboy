import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

import BreedsServices from "../../../services/breed.services";


const BreedDetails = () => {

  const { breed } = useParams()
  console.log(breed)

  const [details, setDetailsBreed] = useState(null);

  // useEffect(() => {
  //   BreedsServices.getDetailsBreed(breed).then(details => setDetailsBreed(details)).catch(err => setDetailsBreed([err]))
  // }, [])

  const getDetailsBreed = breed => {
    console.log(breed)
    BreedsServices.getDetailsBreed(breed)
      .then(response => {
        console.log(response)
        return setDetailsBreed(response)
      })
      .catch(err => setDetailsBreed([err]))
  }

  if (details) {
    console.log(details)
  }

  return (
    <>
      <h1>Detalle de {breed}</h1>

      <button onClick={() => getDetailsBreed(breed)}>
        Detalles raza
              </button>

      {/* <p>{details && details}</p> */}

    </>
  );
};

export default BreedDetails;
