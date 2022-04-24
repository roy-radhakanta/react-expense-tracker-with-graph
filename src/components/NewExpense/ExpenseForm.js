import React, {useState} from "react";

import "./ExpenseForm.css"

function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    // const titleChangeHandler = (event) => {
    //     setEnterTitle(
    //         ()=>{
                
    //         }
    //     );
    // }

    const titleHandle = (e)=>{
        // const title = e.target.value;
        setEnteredTitle(e.target.value);
    }

    const amountHandle = (e)=>{
        // const amount = e.target.value;
        setEnteredAmount(e.target.value);
    }
    
    const dateHandle = (e)=>{
        // const amount = e.target.value;
        setEnteredDate(e.target.value);
    }




    const submitHandler = (e)=>{
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        // console.log(expenseData);
        props.onSubmitData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>
                        Title
                    </label>
                    <input type="text" value={enteredTitle} onChange={titleHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>
                        Amount
                    </label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>
                        Date
                    </label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateHandle}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancle}>Cancle</button>  
                <button type="submit">Add Expense</button>  
            </div>
        </form>
    );
}

export default ExpenseForm;