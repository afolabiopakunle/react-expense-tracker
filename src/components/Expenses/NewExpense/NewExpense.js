import React from 'react';
import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css';

function NewExpense(props) {
    return (
        <div className='new-expense'>
            <NewExpenseForm />
        </div>
    );
}

export default NewExpense;