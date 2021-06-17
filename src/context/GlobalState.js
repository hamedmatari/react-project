import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
const initialState = {
    transactions: [
        { id: 1, text: 'aaa', amount: 22 },
        { id: 2, text: 'vvv', amount: -43 },
        { id: 3, text: 'www', amount: 400 },
        { id: 4, text: 'fff', amount: -60 },
    ]
}


export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function deleteTransaction(id) {
        dispatch({
            type: 'delete',
            peyload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'add',
            peyload: transaction
        });
    }

    return (<GlobalContext.Provider 
        value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
        {children}
        </GlobalContext.Provider>
    )
}