import React, { useState } from "react";
/* ----- Components MaterialUI ----- */
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

const ChipBar = ({ title, text }) => {
    
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => setExpanded(newExpanded ? panel : false)

  return (
    <>
      <ExpansionPanel square onChange={handleChange("panel1")}>
        <ExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography className="text">{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="text">{text}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {console.log(expanded,'Has encontrado un easter Egg!!!, enhorabuena mi pana')}
    </>
  );
};

export default ChipBar;
