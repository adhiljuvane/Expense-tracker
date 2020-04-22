import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { deleteTransactions, transactions } = useContext(GlobalContext);

  return (
    <div className="trans-list-container">
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          return (
            <li
              key={transaction.id}
              className={transaction.amount > 0 ? "income" : "expense"}
            >
              {transaction.text}
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <span>${transaction.amount}</span>
                <button onClick={() => deleteTransactions(transaction.id)}>
                  x
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
