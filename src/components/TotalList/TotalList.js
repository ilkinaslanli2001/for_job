import React from 'react';
import classes from "./totalList.module.css";
import ListItem from "../ListItem/ListItem";
function TotalList({items}) {
    return (
        <div className={classes.wrapper}>
            <h4>Итого можете внести в качестве досрочных:</h4>
            <div className={classes.list}>
                {
                    items.map((item,key)=>{
                        return   <ListItem item={item} itemIndex={key} key={key}/>
                    })
                }


            </div>
        </div>
    );
}

export default TotalList;