import React, { useState } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";


const ChipBar = ({ chip, elements }) => {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <>
        <ExpansionPanel square onChange={handleChange("panel1")}>
            <ExpansionPanelSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
            >
                    <Typography className="text">Consejos</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                    <Typography className="text">{chip}</Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel square onChange={handleChange("panel2")}>
            <ExpansionPanelSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
            >
                <Typography className="text">Elementos necesarios</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                    <Typography className="text">{elements}</Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </>
    );
};

export default ChipBar;
