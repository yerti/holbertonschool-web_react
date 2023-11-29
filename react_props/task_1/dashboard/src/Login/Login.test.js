import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";


describe('Unitest Login Component', () => {
    it('Shallow render the Login component to verify it renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toMatchSnapshot();
    });

    it('render 2 input tags and 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});
