import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransactions } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: Number(amount),
    };

    addTransactions(newTransaction);

    setText("");
    setAmount(0);
  };

  return (
    <div className="add-trans-container">
      <h3>Add a New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> ( negative - expense , positive - income)
          </label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount...."
          />
        </div>
        <button>Add Transaction</button>
      </form>
    </div>
  );
};
