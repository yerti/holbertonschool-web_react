import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';

describe('Test cases in Notification component', () => {
    // Check if the Notifications div renders correctly.
    it('Notifications renders without crashing', () => {
        shallow(<Notifications />);
    })

    // Check if the 3 list type elements are rendered.
    it(' Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        const listItems = wrapper.find('ul li');

        expect(listItems.length).to.equal(3)
    });

    // Check if the text is the same as the one provided.
    it('Notifications renders the text', () => {
        const wrapper = shallow(<Notifications />);
        const text = wrapper.find('p').text();

        expect(text).to.equal('Here is the list of notifications');
    });
})
