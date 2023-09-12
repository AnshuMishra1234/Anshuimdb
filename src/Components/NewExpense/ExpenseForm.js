import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm=()=>{
    const titleChangeHandler=(event)=>{}
    const amountChangeHandler=(event)=>{}
    const dateChangeHandler=(event)=>{}



    
    return(
        <form>
            <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense_control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandle} />
            </div>

            <div className="new-expense_control">
                <label>Date</label>
                <input type="date" onChange={dateChangeHandler} />
            </div>




            </div>

            <div className="new-expense_action">
            <button type="submit">Add Expense</button>
            </div>

        </form>
    )

}

export default ExpenseForm;