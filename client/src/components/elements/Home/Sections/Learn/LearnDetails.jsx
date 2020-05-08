import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* ----- UI components ----- */
import Header from "../../../../ui/Header/Header";
import Footer from "../../../../ui/Footer/Footer";
import DifficultyBar from "../../../../ui/Bars/DifficultyBar";
import InstrucctionsBar from "../../../../ui/Bars/InstrucctionsBar";
import ChipBar from "../../../../ui/Bars/ChipBar";
/* ----- Services ----- */
import getTraining from "../../../../../services/training.services";

const LearnDetails = () => {
  const [training, setTraining] = useState();
  const { learn } = useParams();

  useEffect(
    () =>
      getTraining(learn)
        .then((response) => setTraining(response))
        .catch((err) => console.log(err)),
    [learn]
  );

  return (
    <>
      {training && (
        <>
          <Header title={training.title} route="init-learn" />
          <iframe
            title="videoLection"
            className="margin-negative"
            width="100%"
            height="200px"
            src={training.url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <DifficultyBar level={training.level} />
          <div className="overflow">
            <p className="text margin">{training.text.description}</p>
            {training.text.points.map((elm, idx) => (
              <InstrucctionsBar text={elm} idx={idx + 1} />
            ))}
            <ChipBar title="Consejos" text={training.text.chip} />
            <ChipBar title="Elementos necesarios" text={training.text.elements} />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default LearnDetails;
