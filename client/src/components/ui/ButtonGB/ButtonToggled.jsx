import React, { useState } from "react";
/* ----- Components MaterialUI ----- */
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
/* ----- Styles ----- */
import style from './Style'

/* ----- Actions Redux ----- */

const ToggleButtons = (setGenre) => {
    const styleClass = style()

    const [alignment, setAlignment] = useState('');

    const handleAlignment = (e, newAlignment) => {
        setAlignment(newAlignment);
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
        
    )
}

export default ToggleButtons;
