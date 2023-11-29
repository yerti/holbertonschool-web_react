import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";


describe('Unitest Footer Component', () => {
    it('the Footer component to verify it renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot;
    })

    it('render the text "Copyrigth"', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    });
});
