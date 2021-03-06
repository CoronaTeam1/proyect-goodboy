import React, { useState } from "react";
/* ----- RRD ----- */
import DifficultyBarStyle from "./DifficultyBarStyle";
/* ----- Components MaterialUI ----- */
import NativeSelect from "@material-ui/core/NativeSelect";

const DifficultyBar = ({ level }) => {
  const styleClass = DifficultyBarStyle();
  const [make, setMake] = useState(false);

  const handleChange = () => setMake(!make);

  const levelMarker = () => {
    switch (level) {
      case 1:
      default:
        return (
          <div>
            <img alt="level" src="../../../../images/footWhite.svg" />
            <img alt="level" src="../../../../images/foot.svg" />
            <img alt="level" src="../../../../images/foot.svg" />
            <img alt="level" src="../../../../images/foot.svg" />
            <img alt="level" src="../../../../images/foot.svg" />
          </div>
        );
      case 2:
        return (
          <div>
            <img alt="level" src="../../../../images/footWhite.svg" />
            <img alt="level" src="../../../../images/footWhite.svg" />
            <img alt="level" src="../../../../images/foot.svg" />
            <img alt="level" src="../../../../images/foot.svg" />
            <img alt="level"src="../../../../images/foot.svg" />
          </div>
        );
      case 3:
        return (
          <div>
            <img alt="level" src="../../../../images/footWhite.svg" />
            <img alt="level" src="../../../../images/footWhite.svg" />
            <img alt="level" src="../../../../images/footWhite.svg" />
            <img alt="level" src="../../../../images/foot.svg" />
            <img alt="level" src="../../../../images/foot.svg" />
          </div>
        );
      case 4:
        return (
          <div>
            <img alt="level" src="../../../../images/footWhite.svg" />
            <img alt="level" src="../../../../images/footWhite.svg" />
            <img alt="level" src="../../../../images/footWhite.svg" />
            <img alt="level" src="../../../../images/footWhite.svg" />
            <img alt="level" src="../../../../images/foot.svg" />
          </div>
        );
      case 5:
        return (
          <div>
            <img alt="level" src="../../../../images/footWhite.svg" />
            <img alt="level" src="../../../../images/footWhite.svg" />
            <img alt="level" src="../../../../images/footWhite.svg" />
            <img alt="level" src="../../../../images/footWhite.svg" />
            <img alt="level" src="../../../../images/footWhite.svg" />
          </div>
        );
    }
  };

  return (
    <div className={styleClass.topHeading}>
      <div>
        <p className={styleClass.text}>Nivel dificultad</p>
        {levelMarker()}
      </div>
      <div className={styleClass.center}>
        <NativeSelect
          id="demo-customized-select-native"
          value={make}
          onChange={handleChange}
          className={styleClass.list}
        >
          <option value={false}>Pendiente</option>
          <option value={true}>Finalizada</option>
        </NativeSelect>
      </div>
    </div>
  );
};

export default DifficultyBar;
