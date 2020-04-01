import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import style from './Style'

import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

import '../../../../src/App.css'


const REGISTER_DOG = "REGISTER_DOG";

const ToggleButtons = () => {

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

    const styleClass = style()


    return (

        <Grid item xs={12} >
            <div>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    size="small"
                    className={styleClass.groupToogleButtons}
                >
                    <ToggleButton className={styleClass.ToggleButtons} value="macho" >
                        Macho
                    </ToggleButton>
                    <ToggleButton className={styleClass.ToggleButtons} value="hembra">
                        Hembra
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </Grid>
    )
}

export default ToggleButtons;
