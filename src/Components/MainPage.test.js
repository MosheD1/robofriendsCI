import {shallow, mount, render} from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
let mockStore;

beforeEach(() => {
 mockStore = {
        OnRequestRobots: jest.fn(),
        robots: [],
        searchField: 'j',
        isPending: false
    }

 wrapper = shallow(<MainPage {...mockStore}/>);
});

it('expect to render MainPage', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filter robots correctly', () => {
    mockStore =Object.assign(mockStore,{robots: [
        {
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }
    ]})
    expect(wrapper.instance().filterRobots(mockStore.robots)).toEqual([{"email": "john@gmail.com", "id": 3, "name": "John"}]);
});