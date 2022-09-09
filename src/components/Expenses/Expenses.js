import './expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList/ExpensesList";

function Expenses(props) {

    const [year, selectedYear] = useState('2020')
    const onYearChange = (data) => {
        selectedYear(data)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={year} onYearChange={onYearChange} />
            <ExpensesList expenses={props.expenses} year={year} />
        </Card>
    )
}

export default Expenses;