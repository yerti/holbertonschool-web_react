import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Test cases in Notification component', () => {
    // Check if the Notifications div renders correctly.
    it('Notifications renders without crashing', () => {
        shallow(<Notifications />);
    })

    // Check if the 3 list type elements are rendered.
    it("Renders NotificationItem elements", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('renders first element', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        const listItems = wrapper.find(NotificationItem);
        expect(listItems.first().html()).toEqual('<li class="notification-item" data-notification-type="default"><span>New course available</span></li>');
    });

    // Check if the text is the same as the one provided.
    it('Notifications renders the text', () => {
        const wrapper = shallow(<Notifications />);
        const text = wrapper.find('p').text();

        expect(text).toEqual('Here is the list of notifications');
    });
});
