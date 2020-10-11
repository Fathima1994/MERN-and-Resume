import React, { Component } from 'react';
import {Header} from './Header';
import {Balance} from './Balance';
import {IncomeExpenses} from './IncomeExpenses';
import {TransactionList} from './TransactionList';
import {AddTransaction} from './AddTransaction';

import {GlobalProvider} from '../context/GlobalState'


export class ExpenseTracker extends Component {
    render() {
        return (
            <GlobalProvider>
                <Header />
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </GlobalProvider>
        )
    }
}

export default ExpenseTracker
