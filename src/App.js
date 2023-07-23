import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "BBQ Plaza",
    amount: 15,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Macbook Pro", amount: 299.99, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Guay Tiaw",
    amount: 2.4,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Grab Taxi",
    amount: 5.99,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=> {
     return [expense, ...prevExpenses];
    });
  };
 
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseList={expenses} />
    </div>
  );
};

export default App;
 