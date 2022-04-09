import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [onNewExpense, setOnNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      title: enteredExpenseData.enteredTitle,
      amount: +enteredExpenseData.enteredAmount,
      date: new Date(enteredExpenseData.enteredDate),
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    onCloseForm();
  };

  const onCloseForm = () => {
    setOnNewExpense(!onNewExpense);
  };

  let content = <button onClick={onCloseForm}>Add New Expense</button>;
  if (onNewExpense) {
    content = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeForm={onCloseForm} />;
  }
  return <div className="new-expense">{content}</div>;
}

export default NewExpense;
