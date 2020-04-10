import React, { useState } from "react";
import BreedsServices from "../../../services/breed.services";

const Breed = () => {
  const getBreed = index => {
    BreedsServices.getBreed(index)
      .then(elm => setBreed(elm))
      .catch(err => setBreed([err]));
  };

  const getDetailsBreed = breed => {
    breed.description
      ? setDetailsBreed(breed.description)
      : BreedsServices.getDetailsBreed(breed)
          .then(details => setDetailsBreed(details))
          .catch(err => setDetailsBreed([err]));
  };

  const [breed, setBreed] = useState();
  const [index, setIndex] = useState(1);
  const [detailsBreed, setDetailsBreed] = useState("");

  console.log(detailsBreed);
  return (
    <>
      <div onClick={() => getBreed(index)}>Obten tus Razas</div>
      <div>
        {breed &&
          breed.map((elm, idx) => (
            <>
              <h3 key={elm._id}>{elm.name}</h3>
              <button onClick={() => getDetailsBreed(elm)}>
                Detalles raza
              </button>
            </>
          ))}
      </div>
      <div>
        <p>{detailsBreed && detailsBreed}</p>
      </div>
      {/* <div><p>{detailsBreed && detailsBreed.info}</p></div> */}
    </>
  );
};

export default Breed;
