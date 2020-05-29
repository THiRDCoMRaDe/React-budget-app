import React from 'react';
import { shallow } from "enzyme";
import { ExpenseList } from "../../component/ExpenseList";
import expenses from "../fixtures/expenses";
import {expect} from "@jest/globals";

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});