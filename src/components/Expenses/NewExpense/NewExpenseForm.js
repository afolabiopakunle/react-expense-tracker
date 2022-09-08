import React, {useState} from 'react';
import './NewExpenseForm.css';

function NewExpenseForm(props) {

    const [expenseTitle, setExpenseTitle] = useState('');
    const [expenseDate, setExpenseDate] = useState('');
    const [expenseAmount, setExpenseAmount] = useState('');

    const titleChangeHandler = (event) => {
        setExpenseTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setExpenseAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setExpenseDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = {
            title: expenseTitle,
            amount: expenseAmount,
            date: expenseDate,
        }
        setExpenseAmount('');
        setExpenseTitle('');
        setExpenseDate('');
        props.onFormSubmit(formData)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={expenseTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={expenseAmount} min='0.01' onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={expenseDate} min='2022-09-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default NewExpenseForm;