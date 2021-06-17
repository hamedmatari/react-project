import React ,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext)
    let income=0 , expense=0
    transactions.forEach((transaction)=>{transaction.amount>0?income+=transaction.amount:expense-=transaction.amount})
    
    return (
        <div className='inc-exp-container'>
            <div className='mid-border'>
                <h4>Income</h4>
                <p className='money plus'>{income.toFixed(2)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p  className='money minus'>{expense.toFixed(2)}</p>
            </div>
        </div>
    )
}
