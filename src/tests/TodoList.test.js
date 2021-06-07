import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../components/TodoList';


 test('should test TodoList component', () => {
     const wrapper = shallow(<TodoList />);
     expect(wrapper).toMatchSnapshot();
 });

 test ('should test the handleAddTodo', () => {
     const wrapper = shallow(<TodoList/>);
     const instance = wrapper.instance();
     const value = 'publsh article'
     instance.handleAddTodo({
         preventDefault: () => {},
     })
 })