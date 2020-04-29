import React, { useState } from "react"
import HomeStyle from "../../HomeStyle";
import Section from "../Sections";
import Footer from '../../../../ui/Footer/Footer'
import Header from '../../../../ui/Header/Header'

const LearnInit = () => {
    const styleClass = HomeStyle();

    return (
        <>
        <Header title="Lecciones básicas"/>
        <div className={styleClass.mainPanel}>
            <Section
                url="../../../../images/learn1.svg"
                title="Andar con correa"
            />
            <Section
                url="../../../../images/learn2.svg"
                title="Quieto"
            />
            <Section
                url="../../../../images/learn3.svg"
                title="Sentarse"
            />
            <Section
                url="../../../../images/learn4.svg"
                title="Tumbarse"
            />
        </div>
    <Footer />
    </>
    )
}

export default LearnInit