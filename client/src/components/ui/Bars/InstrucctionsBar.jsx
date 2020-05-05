import React, { useState } from "react";
import DifficultyBarStyle from "./DifficultyBarStyle";


const InstructionBar = ({ text }) => {
    const styleClass = DifficultyBarStyle();

    return (
<div className={styleClass.center}>
    <img src="../../../../images/footGreen.svg" />
    <p>{text}</p>
    <img src="../../../../images/arrowDown.svg" />
</div>
    );
};

export default InstructionBar;
