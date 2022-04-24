import React, {useState} from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

export default function Expense(props){
    const [filterData, setFilterData] = useState('2020');
    const takeDataHandle = (expenseFilterYear)=>{
        setFilterData(expenseFilterYear);
    }

    const expenseFilter = props.items.filter(curExYr=>{
        return curExYr.date.getFullYear().toString() === filterData;
    });


    return(        
        <Card className="expenses">
            <ExpensesFilter selected={filterData} onChangeEve={takeDataHandle}/>
            <ExpenseChart expense={expenseFilter}/>
            <ExpenseList
                items={expenseFilter}
            />
        </Card>
    );  
}