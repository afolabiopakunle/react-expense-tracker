import './expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import {useState} from "react";

function Expenses(props) {

    const [year, selectedYear] = useState('2020')
    const onYearChange = (data) => {
        selectedYear(data)
    }
    let displayExpenses = <p className='white'>No expenses found</p>
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === year )
    if(filteredExpenses.length > 0) {
        displayExpenses = filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={year} onYearChange={onYearChange} />
            {displayExpenses}

        </Card>
    )
}

export default Expenses;