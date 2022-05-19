import React from "react";
import { createContext, useContext, useReducer } from "react";

//Prepares the data
export const StateContext = createContext();

// Wrap the app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
