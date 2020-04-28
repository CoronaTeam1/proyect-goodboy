import React, {useState} from "react"
import HomeStyle from "../../HomeStyle";
import Section from "../Sections";

const LearnInit = () => {
const styleClass = HomeStyle();

    return (
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
    )
}

export default LearnInit