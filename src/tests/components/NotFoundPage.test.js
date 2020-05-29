import React from 'react';
import { shallow } from "enzyme";
import NotFoundPage from "../../component/NotFoundPage";
import {expect} from "@jest/globals";

test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});