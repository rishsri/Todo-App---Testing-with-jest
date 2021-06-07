import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from "../components/AddTodo";

test("should test addTodo Component", () => {
    const wrapper = shallow(<AddTodo/>);
    expect(wrapper).toMatchSnapshot();
})

test("should handle onSubmit handler", () => {
    const onSubmitSpv = jest.fn();
    const wrapper = shallow(<AddTodo handleAddTodo = {onSubmitSpv}/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('Form').simulate('submit');
    expect(onSubmitSpv).toHaveBeenCalled();
})