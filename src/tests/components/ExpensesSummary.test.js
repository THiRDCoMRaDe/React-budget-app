import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from "../../component/ExpensesSummary";
import {expect} from "@jest/globals";

test('should correctly render expensesSummary with 1 expense',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});
test('should correctly render expensesSummary with multiple expenses',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23512340987} />);
    expect(wrapper).toMatchSnapshot();
});