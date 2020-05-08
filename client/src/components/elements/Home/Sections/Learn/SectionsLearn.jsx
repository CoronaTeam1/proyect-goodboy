import React from "react";
import Section from "../../../../ui/Sections/Sections";
import Footer from "../../../../ui/Footer/Footer";
import Header from "../../../../ui/Header/Header";
import { Link } from "react-router-dom";
import HomeStyle from "../../HomeStyle";


const SectionsLearn = () => {
    const styleClass = HomeStyle();

    return (
        <>
            <Header title="Lecciones básicas" route="home" />
            <div className={styleClass.mainPanel}>
                    <Link to="/init-learn" className={styleClass.mainPanel}>
                        <Section
                            url="../../../../images/sectionInit.svg"
                            title="Inicio"
                        />
                    </Link>
                    <Section
                        url="../../../../images/sectionBasic.svg"
                        title="Básicas"
                    />
                    <Section
                        url="../../../../images/sectionAdvance.svg"
                        title="Avanzadas"
                    />
            </div>
            <Footer />
        </>
    );
};

export default SectionsLearn;
