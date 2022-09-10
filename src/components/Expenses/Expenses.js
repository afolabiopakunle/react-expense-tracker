import Card from "../Card/Card";
import './expenses.css'
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [year, selectedYear] = useState('2020')
    const onYearChange = (data) => {
        selectedYear(data)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={year} onYearChange={onYearChange} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={props.expenses} year={year} />
        </Card>
    )
}

export default Expenses;