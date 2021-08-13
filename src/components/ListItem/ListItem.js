import React, {useState} from 'react';
import classes from "./listItem.module.css";

import {ReactComponent as TickIcon} from "../../assets/svg/Tick.svg";
function ListItem({item,itemIndex}) {
    const [active,setActive] = useState(false)
    return (
        <div className={classes.wrapper}>
            <div onClick={()=>{setActive(!active)}} className={[classes.checkbox,active===true?classes.active:undefined].join(' ')}>
                {active ? <TickIcon/>:undefined}
            </div>
            <p>{item.toLocaleString()} рублей <span>{itemIndex+1!==2?"в":"во"} {itemIndex+1}-ый год</span></p>
        </div>
    );
}

export default ListItem;