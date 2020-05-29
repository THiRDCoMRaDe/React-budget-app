import React from 'react';
import { shallow } from "enzyme";
import ExpenseDashboardPage from "../../component/ExpenseDashboardPage";
import {expect} from "@jest/globals";

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});
