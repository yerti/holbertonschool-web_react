import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe('Unitest NotificationItem Component', () => {
    it('Verify that the basic rendering of the component works without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the correct html with dummy type and value props', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find('[data-notification-type="default"]').text()).toEqual('test');
    });

    it('renders the correct html with dummy html prop', () => {
        const htmlProp = { __html: '<u>test</u>' };
        const wrapper = shallow(<NotificationItem html={htmlProp} />);
        expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual(htmlProp);
    });
});
