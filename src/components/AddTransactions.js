import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransactions = () => {
    
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransactions } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount //this +amount will parse string into a number
        }

        addTransactions(newTransaction);
    }

    return (
        <>
            <h3>Add new Transactions</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
                </div>
                <div className='form-control'>
                    <label htmlFor="amount">Amount <br /> (negative - expenses, positive - expenses) </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </>
    )
}
