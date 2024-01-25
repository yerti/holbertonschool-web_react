import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe('CourseList Component', () => {
    it('render CourseList component without crashing', () => {
        const wrapper =  shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });

    it('render the 5 different rows', () => {
        const wrapper =  shallow(<CourseList />);
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });
});
