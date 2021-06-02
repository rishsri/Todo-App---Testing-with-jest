import React from 'react';
import {shallow} from "enzyme"
import Header from "../components/Header"

test('should test header component', () => {
    const wrapper = shallow (<Header/>);
    expect(wrapper).toMatchSnapshot();
});