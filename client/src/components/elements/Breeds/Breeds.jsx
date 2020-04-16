import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
// import { FixedSizeList } from "react-window";
import BreedsServices from "../../../services/breed.services";

const Breed = () => {

  const getBreed = index => {
    BreedsServices.getBreed(index)
      .then(elm => setBreed(elm))
      .catch(err => setBreed([err]));
  };


  // const getDetailsBreed = breed => {
  //   breed.description
  //   ? setDetailsBreed(breed.description)
  //   : BreedsServices.getDetailsBreed(breed)
  //   .then(details => setDetailsBreed(details))
  //   .catch(err => setDetailsBreed([err]));
  // };

  const [breed, setBreed] = useState();
  const [index, setIndex] = useState(0);
  // const [detailsBreed, setDetailsBreed] = useState("");
  const history = useHistory()
  useEffect(() => getBreed(index), [index])

  return (
    <>
      {/* <FixedSizeList
        height={400}
        width={300}
        itemSize={50}
        itemData={users}
        itemCount={users.length}
        overscanCount={5}
        useIsScrolling={true}
      > */}
      {breed &&
        breed.map((elm, idx) => (
          <>
            <h3 key={elm._id}>{elm.name}</h3>
            <img src={elm.image} alt={elm.name} />
            <button onClick={() => history.push(`/${elm.name}`)}>
              {/* <button onClick={() => getDetailsBreed(elm)}> */}
                Detalles raza
              </button>
          </>
        ))}
      {/* </FixedSizeList> */}

      {/* <div>
        <p>{detailsBreed && detailsBreed}</p>
      </div>
      <div><p>{detailsBreed && detailsBreed.info}</p></div> */}
    </>
  );
};

export default Breed;
