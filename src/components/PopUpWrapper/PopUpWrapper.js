import React from 'react';
import classes from "./popUpWrapper.module.css";
function PopUpWrapper({children}) {
    return (
        <div className={classes.popup_wrapper}>
            {children}
        </div>
    );
}

export default PopUpWrapper;