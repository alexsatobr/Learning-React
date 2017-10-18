import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
//addExpense -> water bill

//addExpense -> Gas bill
store.dispatch(addExpense({description: 'Gas bill', amount: 1000 }));
store.dispatch(addExpense({description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({description: 'Rent', amount: 109600 }));
// setTextFilter -> bill (2 items) -> water (1 item)
// store.dispatch(setTextFilter('water'));

const state = store.getState();
// getVisibleExpenses -> print visibles ones to screen
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


// console.log(store.getState());

const jsx  = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
