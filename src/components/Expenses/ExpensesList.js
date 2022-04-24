import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

function ExpenseList(props){
    
    if(props.items.length === 0){
       return (
           <h2 className="expenses-list__fallback">
               Found no Expenses.
           </h2>
       );
    }
    return (
        <ul className="expenses-list"> 
            { props.items.map(curExpItm => (
            <ExpenseItem 
            key={curExpItm.id}
            title={curExpItm.title}
            amount={curExpItm.amount}
            date={curExpItm.date}
            />
        ))}
        </ul>
    );
}

export default ExpenseList;