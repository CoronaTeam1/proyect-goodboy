import React, { useState, useEffect } from "react";
import {Grid} from '@material-ui/core'
import style from "./style";


const Slice = ({url, text}) => {
     const styleClass = style()

    return (<Grid item xs={4}>
            <div className={styleClass.containerImage}>
                <img src={url} alt="dog index"  className={styleClass.image}/>
            </div>
            <p>{text}</p>
            </Grid>
    )
};
export default Slice;