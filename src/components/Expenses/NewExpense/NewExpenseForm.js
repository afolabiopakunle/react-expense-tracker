import React from 'react';
import './NewExpenseForm.css';

function NewExpenseForm(props) {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2022-09-01' max='2022-12-31' />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default NewExpenseForm;