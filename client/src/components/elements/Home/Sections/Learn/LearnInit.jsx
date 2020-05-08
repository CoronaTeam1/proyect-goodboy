import React from "react";
import HomeStyle from "../../HomeStyle";
import Section from "../../../../ui/Sections/Sections";
import Footer from "../../../../ui/Footer/Footer";
import Header from "../../../../ui/Header/Header";
import { useHistory } from "react-router-dom";


const LearnInit = () => {
  const styleClass = HomeStyle();
  const history = useHistory();

  return (
    <>
      <Header title="Lecciones básicas" />
      <div className={styleClass.mainWrapper}>
        <div className={styleClass.mainPanel}>
          <Section
            url="../../../../images/learn1.svg"
            title="Andar con correa"
            event={() => history.push(`/init-learn/walk`)}
          />
          <Section
            url="../../../../images/learn2.svg"
            title="Quieto"
            event={() => history.push(`/init-learn/stop`)}
          />
          <Section
            url="../../../../images/learn3.svg"
            title="Sentarse"
            event={() => history.push(`/init-learn/sit`)}
          />
          <Section
            url="../../../../images/learn4.svg"
            title="Tumbarse"
            event={() => history.push(`/init-learn/tumb`)}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LearnInit;
