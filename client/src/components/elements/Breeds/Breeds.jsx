import React, { useState } from "react";
import BreedsServices from "../../../services/breed.services";

const breeds = new BreedsServices();

const Breed = () => {
  const getBreed = index => {
    breeds.getBreed(index).then(elm => setBreed(elm)).catch(err => setBreed([err]))
  };

  const [breed, setBreed] = useState()
  const [index, setIndex] = useState(0)

  return (
    <>
      <div onClick={() => getBreed(index)}>Obten tus Razas</div>
      <div>{breed && breed.map((elm, idx) => <h3 key={idx}>{elm}</h3>)}</div>
    </>
  );
};

export default Breed;
