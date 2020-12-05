import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';
//Initial State
const initialState = {
    transactions: []
}

//create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    //Actions
    const deleteTransactions = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTIONS',
            payload: id
        });
    }

    const addTransactions = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTIONS',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions
    }}>
        {children}
    </GlobalContext.Provider>)
}