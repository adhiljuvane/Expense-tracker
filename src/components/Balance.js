import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  let amount = 0;
  transactions.forEach((item) => {
    amount = amount + item.amount;
  });

  return (
    <div className="balance-container">
      <div>Your Balance</div>
      <div className="balance">${amount}</div>
    </div>
  );
};
