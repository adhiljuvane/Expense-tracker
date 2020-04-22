import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  let income = 0;
  let expense = 0;
  transactions.forEach((item) => {
    if (item.amount > 0) {
      income = income + item.amount;
    } else {
      expense = expense + item.amount;
    }
  });

  return (
    <div className="inc-exp-container">
      <div className="income">
        <div>INCOME</div>
        <div className="amount">${income}</div>
      </div>
      <div className="expenses">
        <div>EXPENSE</div>
        <div className="amount">${Math.abs(expense)}</div>
      </div>
    </div>
  );
};
