import React, { useState } from "react";
import BreedsServices from "../../../services/breed.services";

const breeds = new BreedsServices();

const Breed = () => {
  const getBreed = index => {
    breeds.getBreed(index).then(elm => setBreed(elm)).catch(err => setBreed([err]))
  };

  const getDetailsBreed = breed => {
    breeds.getDetailsBreed(breed).then(details => setDetailsBreed(details)).catch(err => setDetailsBreed([err]))
  }

  const [breed, setBreed] = useState()
  const [index, setIndex] = useState(0)
  const [detailsBreed, setDetailsBreed] = useState('')

  console.log(detailsBreed)
  return (
    <>
      <div onClick={() => getBreed(index)}>Obten tus Razas</div>
      <div>{breed && breed.map((elm, idx) => <><h3 key={idx}>{elm}</h3><button onClick={() => getDetailsBreed(elm)}>Detalles raza</button></>)}</div>
      <div><p>{detailsBreed && detailsBreed.title}</p></div>
      <div><p>{detailsBreed && detailsBreed.image}</p></div>
      <div><p>{detailsBreed && detailsBreed.description}</p></div>
      {/* <div><p>{detailsBreed && detailsBreed.info}</p></div> */}
    </>
  );
};

export default Breed;
