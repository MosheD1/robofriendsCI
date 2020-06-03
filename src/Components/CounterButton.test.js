import {shallow, mount, render} from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect state to have a count', () => {
    const wrapper = shallow(<CounterButton />);
    expect(wrapper.state('count')).toBe(0);
});

it('expect shouldComponentUpdate to run', () => {
    const wrapper = shallow(<CounterButton />);
    const instance = wrapper.instance();
    instance.updateCount();
    expect(instance.state.count).toBe(1);
})

it('expect to render CounterButton', () => {
    expect(shallow(<CounterButton />)).toMatchSnapshot();
});