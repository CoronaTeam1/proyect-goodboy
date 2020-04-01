import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";


import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';



import style from './Style'

const REGISTER_DOG = "REGISTER_DOG";

const ToggleButtons = () => {
    const styleClass = style()

    const [alignment, setAlignment] = useState('');

    const dispatch = useDispatch();


    const handleAlignment = (e, newAlignment) => {
        setAlignment(newAlignment);
        dispatch({
            type: REGISTER_DOG,
            field: "genre",
            value: newAlignment
        });
    };



    return (

        // <Grid item xs={12} >
        <div>
            <ToggleButtonGroup
                className={styleClass.groupToogleButtons}
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                size="small"
            >
                <ToggleButton className={styleClass.ToggleButtons} value="macho" >
                    Macho
                    </ToggleButton>
                <ToggleButton className={styleClass.ToggleButtons} value="hembra">
                    Hembra
                    </ToggleButton>
            </ToggleButtonGroup>
        </div>
        // </Grid>
    )
}

export default ToggleButtons;
