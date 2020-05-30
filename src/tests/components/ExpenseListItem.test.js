import React from 'react';
import { shallow } from "enzyme";
import ExpenseListItem from "../../component/ExpenseListItem";
import expenses from "../fixtures/expenses";
import {expect} from "@jest/globals";

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});