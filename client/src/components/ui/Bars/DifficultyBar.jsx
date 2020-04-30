import React, { useState } from "react";
import DifficultyBarStyle from "./DifficultyBarStyle";
import NativeSelect from "@material-ui/core/NativeSelect";

const DifficultyBar = ({ title }) => {
  const styleClass = DifficultyBarStyle();
  const [make, setMake] = useState(false);

  const handleChange = () => setMake(!make);
  return (
    <div className={styleClass.topHeading}>
      <div>
        <p className={styleClass.text}>Nivel dificultad</p>
        <div>
          <img src="../../../../images/footWhite.svg" />
          <img src="../../../../images/footWhite.svg" />
          <img src="../../../../images/foot.svg" />
          <img src="../../../../images/foot.svg" />
          <img src="../../../../images/foot.svg" />
        </div>
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
