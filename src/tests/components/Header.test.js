/*
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from "../../component/Header";
import {expect} from "@jest/globals";

test('should render Header correctly', () => {
   const renderer = new ReactShallowRenderer();
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
*/

// by ENZYME
import React from 'react';
import { shallow } from 'enzyme';
import {Header} from "../../component/Header";
import {expect} from "@jest/globals";

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>)
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
