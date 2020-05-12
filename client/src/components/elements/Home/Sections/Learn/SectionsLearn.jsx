import React from "react";
import { Link } from "react-router-dom";
/* ----- UI components ----- */
import Section from "../../../../ui/Sections/Sections";
import Footer from "../../../../ui/Footer/Footer";
import Header from "../../../../ui/Header/Header";
/* ----- Styles ----- */
import HomeStyle from "../../HomeStyle";


const SectionsLearn = () => {
    const styleClass = HomeStyle();

    return (
        <>
            <Header title="Lecciones" route="home" />
            <div className={styleClass.mainWrapper}>
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
            </div>
            <Footer />
        </>
    );
};

export default SectionsLearn;
