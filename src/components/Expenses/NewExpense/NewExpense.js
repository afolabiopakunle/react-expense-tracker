import React, {useState} from 'react';
import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css';

function NewExpense(props) {

    const [showForm, setShowForm] = useState(false);

    const formSubmitted = (data) => {
        const newData = {
            ...data,
            id: Math.floor(Math.random() * 1000).toString(),
        }
        console.log('NEW EXPENSE', newData)
        props.onFormPassed(newData)
    }

    const toggleShowFormHandler = () => {
        let result = !showForm
        setShowForm(result)
    }

    return (
        <div className='new-expense'>
            {!showForm && <button onClick={toggleShowFormHandler}>Add Expense</button>}
            {showForm && <NewExpenseForm onToggleShowForm={toggleShowFormHandler} onFormSubmit={formSubmitted}/>}
        </div>
    );
}

export default NewExpense;