import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formState, setFormState] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormState(false);
  };

  const closeHandler = () => {
    setFormState(false);
  };

  const openHandler = () => {
    setFormState(true);
  };

  return (
    <div className="new-expense">
      {formState && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          close={closeHandler}
        />
      )}
      {!formState && <button onClick={openHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
