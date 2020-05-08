import React from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';


const InstructionBar = ({ text, idx }) => {

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<img src="../../../../images/arrowDown.svg" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <img src="../../../../images/footGreen.svg" className="margin-right"/>
                <Typography className="text">Paso {idx}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography className="text">
                    {text}
          </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default InstructionBar;
