import React from 'react';
import {shallow } from 'enzyme';
import LoadingPage from "../../component/LoadingPage";
import {expect} from "@jest/globals";

test('should render loading page correctly', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});