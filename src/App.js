import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import Expense from "./components/Expense";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="my-3 text-center">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <Expense />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpense />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
