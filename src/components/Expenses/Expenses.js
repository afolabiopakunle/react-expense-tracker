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

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={year} onYearChange={onYearChange} />
            {props.expenses.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}

        </Card>
    )
}

export default Expenses;