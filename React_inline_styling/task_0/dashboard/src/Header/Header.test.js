import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";


describe('The Header component', () => {
    it('the Header component to verify it renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });

    it('render img and h1 tags', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1)
    });

});
