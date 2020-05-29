import React from 'react';
import { shallow } from 'enzyme';
import expenses from "../fixtures/expenses";
import { EditExpensePage } from '../../component/EditExpensePage';
import {beforeEach, expect} from "@jest/globals";
import Jest from 'jest-mock';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = Jest.fn();
    removeExpense = Jest.fn();
    history = { push: Jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpense}
            removeExpense={removeExpense}
            history={history}
            expense={expenses[2]}
        />
    );
});

test('should render EditExpensePage',() => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense',() => {
    wrapper.find('ExpenseForm').prop('onsubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense',() => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
});

