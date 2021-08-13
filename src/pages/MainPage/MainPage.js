import React, {useState,useEffect} from 'react';
import classes from "./mainPage.module.css";
import PopUpWrapper from "../../components/PopUpWrapper/PopUpWrapper";
import TaxDeduction from "../../components/TaxDeduction/TaxDeduction";
function MainPage(props) {
    const [dialogOpen,setDialogOpen] = useState(false)
    useEffect(() => {
        // Отключаем скроллинг есдт диалоговое окно открыто
        if (dialogOpen) {
            document.body.style.overflow = "hidden"
            document.body.style.touchAction = "none";
            document.documentElement.style.overflow = "hidden"
            document.documentElement.style.touchAction = "none";

        } else {
            document.documentElement.style.touchAction = "auto";
            document.body.style.touchAction = "auto"
            document.documentElement.style.overflow = "auto"
            document.body.style.overflow = "auto"
        }
    }, [dialogOpen])
    return (
        <div className={classes.wrapper}>
            {dialogOpen ? <PopUpWrapper><TaxDeduction  setDialogOpen={setDialogOpen}/></PopUpWrapper>:undefined}
            <button className={classes.startBTN} onClick={()=>{setDialogOpen(true)}}>Налоговый вычет</button>
        </div>
    );
}

export default MainPage;