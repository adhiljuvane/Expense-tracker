import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  function deleteTransactions(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransactions(transaction) {
    console.log("here");
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
