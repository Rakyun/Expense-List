import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import React, { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState("2019");

  const yearStorer = (yearVal) => {
    setYear(yearVal);
  };

  const filteredExpenses = props.expenseList.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} getYear={yearStorer} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
  