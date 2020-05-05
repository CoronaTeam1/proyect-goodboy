import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../../ui/Header/Header";
import Footer from "../../../../ui/Footer/Footer";
import DifficultyBar from "../../../../ui/Bars/DifficultyBar";
import InstrucctionsBar from "../../../../ui/Bars/InstrucctionsBar";
import getTraining from "../../../../../services/training.services";

const LearnDetails = () => {
  const [training, setTraining] = useState();
  const { learn } = useParams();
  console.log(training);
  useEffect(
    () =>
      getTraining(learn)
        .then((response) => setTraining(response))
        .catch((err) => console.log(err)),
    []
  );

  return (
    <>
      {training && (
        <>
          <Header title={training.title} />
          <iframe
            width="100%"
            height="200px"
            src={training.url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <DifficultyBar level={training.level}/>
          <div className="overflow">
            <p>{training.text.description}</p>
            {training.text.points.map((elm) => (
              <InstrucctionsBar text={elm} />
            ))}
            <p>{training.text.chip}</p>
            <p>{training.text.elements}</p>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default LearnDetails;
