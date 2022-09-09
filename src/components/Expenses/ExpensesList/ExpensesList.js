import React from 'react';
import ExpenseItem from "../ExpenseItem";
import './ExpensesList.css';

function ExpensesList(props) {

    let displayExpenses = <h2 className='expenses-list__fallback'>Found No Expenses</h2>
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === props.year )
    if(filteredExpenses.length > 0) {
        displayExpenses = filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))
    }

    return (
        <div>
        {displayExpenses}
        </div>
    );
}

export default ExpensesList;