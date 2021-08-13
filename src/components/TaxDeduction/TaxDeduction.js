import React, {useState} from 'react';
import classes from './taxDeduction.module.css'
import {ReactComponent as CloseIcon} from "../../assets/svg/Close.svg";
import CurrencyInput from 'react-currency-input-field';
import {PAYMENT, TERM} from "../../constant";
import TotalList from "../TotalList/TotalList";


function TaxDeduction({setDialogOpen}) {
    const [items, setItems] = useState([])
    const [salary, setSalary] = useState(0)
    const [choice, setChoice] = useState(PAYMENT)
    const [error, setError] = useState("")
    var flat_price = 20000000 // цена квартиры
    const onCalculateClick = () => {

        if (salary > 0) {
            var ch_items = []
            const tax_deduction = parseInt((salary * 12) * 0.13)
            var payment = 260000
            if (flat_price < 2000000) {
                payment = flat_price / 1300;
            }
            var ch = 0
            while (ch < payment) {
                if (ch + tax_deduction > payment)
                    break
                ch += tax_deduction
                ch_items = [...ch_items, tax_deduction]
            }
            var substr = payment - ch
            if (substr > 0)
                ch_items = [...ch_items, substr]
            setItems(ch_items)

        } else {

            setError("Поле обязательно для заполнения")
        }
    }

    return (
        <div className={classes.wrapper}>

            <i onClick={() => {
                setDialogOpen(false)
            }} className={classes.close}><CloseIcon/></i>
            <h1>Налоговый вычет</h1>
            <p className={classes.text}>Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
                налогового вычета составляет не
                более 13% от своего официального годового дохода.</p>
            <div className={classes.input_wrapper}>
                <h2>Ваша зарплата в месяц</h2>
                <CurrencyInput
                    id="input-example"
                    className={error !== "" ? classes.error_input : undefined}
                    name="input-name"
                    allowNegativeValue={false}
                    placeholder="Введите данные"
                    value={salary === 0 ? "" : salary}
                    suffix={" ₽"}
                    decimalsLimit={2}
                    onValueChange={(value) => setSalary(parseInt(value))}
                />
                {error !== "" ? <span className={classes.error}>{error}</span> : undefined}
                <button onClick={onCalculateClick}>Рассчитать</button>
            </div>
            {items.length > 0 ? <TotalList items={items}/> : undefined}
            <div className={classes.choice_wrapper}>
                <h3>Что уменьшаем?</h3>
                <ul>
                    <li onClick={() => {
                        setChoice(PAYMENT)
                    }} className={choice === PAYMENT ? classes.active : undefined}>Платеж
                    </li>
                    <li onClick={() => {
                        setChoice(TERM)
                    }} className={choice === TERM ? classes.active : undefined}>Срок
                    </li>
                </ul>
            </div>
            <button className={classes.addBTN}>Добавить</button>

        </div>
    );
}

export default TaxDeduction;