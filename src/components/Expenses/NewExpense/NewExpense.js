import React from 'react';
import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css';

function NewExpense(props) {

    const formSubmitted = (data) => {
        const newData = {
            ...data,
            id: Math.floor(Math.random() * 1000).toString(),
        }
        console.log('NEW EXPENSE', newData)
        props.onFormPassed(newData)
    }
    return (
        <div className='new-expense'>
            <NewExpenseForm onFormSubmit={formSubmitted} />
        </div>
    );
}

export default NewExpense;