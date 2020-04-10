import React, { useState } from "react";
import BreedsServices from "../../../services/breed.services";


const BreedDetails = () => {


  const getDetailsBreed = breed => {
    BreedsServices.getDetailsBreed(breed).then(details => setDetailsBreed(details)).catch(err => setDetailsBreed([err]))
  }

  const [detailsBreed, setDetailsBreed] = useState('')

  return (
    <>
      <h1>Detalle de la raza</h1>

      {/* {/* <div>{detailsBreed && detailsBreed.map((elm, idx) => <><h3 key={idx}>{elm}</h3><button onClick={() => getDetailsBreed(elm)}>Detalles raza</button></>)}</div> */} */}
    </>
  );
};

export default BreedDetails;
