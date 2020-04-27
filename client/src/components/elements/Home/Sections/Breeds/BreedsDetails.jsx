import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BreedsServices from "../../../../../services/breed.services";

const BreedDetails = () => {
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
    <>
      <h1>Detalle de la raza {breed}</h1>

      {/* <button onClick={() => getDetailsBreed(breed)}>Detalles raza</button> */}

      <p>{details && details.description}</p>
      <p>{details && details.points.map(elm => <li>{elm}</li>)}</p>
    </>
  );
};

export default BreedDetails;
