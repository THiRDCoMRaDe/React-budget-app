import React from 'react';
import { shallow } from 'enzyme';
import {AddExpensePage} from "../../component/AddExpensePage";
import Jest from 'jest-mock';
import {beforeEach, expect} from "@jest/globals";
import expenses from "../fixtures/expenses";

let addExpense, history, wrapper;
beforeEach(()=>{
    addExpense = Jest.fn();
    history = { push: Jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onsubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});