import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Header from "../../../../ui/Header/Header";
import Footer from "../../../../ui/Footer/Footer";
import DifficultyBar from "../../../../ui/Bars/DifficultyBar";
import InstrucctionsBar from "../../../../ui/Bars/InstrucctionsBar";
import TrainingServices from "../../../../../services/training.services";




const LearnDetails = () => {

  const [training, setTraining] = useState()
  const { learn } = useParams();

  const getTraining = () => {
    TrainingServices.getTraining(learn)
      .then(elm => console.log(elm))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getTraining();
  }, []);

  return (
    <>
      <Header title={learn} />
          <iframe width="100%" height="200px" src="https://www.youtube.com/embed/wjBg5Nlx1HM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <DifficultyBar />
    <div className="overflow">
      <p>Es es esencial enseñarle a pasear con correa. El adiestramiento debe comenzar en cuanto el perro llegue a casa, no importa qué edad tenga. De hecho, en algunos países el uso de correas es obligatorio por ley.</p>
      <InstrucctionsBar />
      <InstrucctionsBar />
      <InstrucctionsBar />
    </div>
      <Footer />
    </>
  );
};

export default LearnDetails;
