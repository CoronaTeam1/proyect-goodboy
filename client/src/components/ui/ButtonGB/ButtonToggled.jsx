import React, { useState } from "react";
/* ----- Redux ----- */
import { useDispatch } from "react-redux";
/* ----- Components MaterialUI ----- */
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
/* ----- Styles ----- */
import style from './Style'

/* ----- Actions Redux ----- */
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
        <div>
            <ToggleButtonGroup
                className={styleClass.padding30px}
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                size="small"
            >
                <ToggleButton className={styleClass.ToggleButtons} value="Macho" >
                    Macho
                    </ToggleButton>
                <ToggleButton className={styleClass.ToggleButtons} value="Hembra">
                    Hembra
                    </ToggleButton>
            </ToggleButtonGroup>
        </div>
        // </Grid>
    )
}

export default ToggleButtons;
