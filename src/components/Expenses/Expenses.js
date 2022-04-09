import { useState } from "react";

import Card from "../UI/Card";

import "./Expenses.css";

import ExpensesFilter from "./ExpensisFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (props) => {
    setFilteredYear(props.target.value);
  };

  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} filterChangeHandler={filterChangeHandler} />
        <ExpensesChart expenses={filterdExpenses} />
        <ExpensesList items={filterdExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
