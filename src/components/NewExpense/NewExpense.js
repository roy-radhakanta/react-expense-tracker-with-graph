import React, {useState} from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
export default function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);
    const onChangeData = (expenseData)=>{
        const expenseDataSet = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onChangeData(expenseDataSet);
        setIsEditing(false);
    }

    const changeStateBtn = ()=>{
        setIsEditing(
            true
        );
    }

    const cancleSubmission = ()=>{
        setIsEditing(
            false
        );
    }


    return (
        <div className="new-expense">
            {!isEditing && <button onClick={changeStateBtn}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSubmitData={onChangeData} onCancle={cancleSubmission}/>}
        </div>
    );
}