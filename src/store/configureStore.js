import { combineReducers, createStore } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
// Store Creation
/*const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
        })
    );
    return store;*/
export default () => {
    return createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}