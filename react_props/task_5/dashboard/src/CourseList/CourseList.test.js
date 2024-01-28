import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe('CourseList Component', () => {
    it('renders CourseList component without crashing', () => {
        const wrapper =  shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders the 5 different rows', () => {
        const wrapper =  shallow(<CourseList />);
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });

    // Add a new test to verify that CourseList renders correctly if you pass an empty array or if you don’t pass the listCourses property
    it('renders correctly with an empty array or no listCourses property', () => {
        const wrapperEmpty = shallow(<CourseList />);
        const wrapperNoProperty = shallow(<CourseList />);
        
        expect(wrapperEmpty.find('CourseListRow')).toHaveLength(0);
        expect(wrapperNoProperty.find('CourseListRow')).toHaveLength(0);
    });

    // Add a new test to verify that when you pass a list of courses, the component renders it correctly
    it('renders correctly with a list of courses', () => {
        const courses = [
            {id: 1, name:'ES6', credit: 60},
            {id: 2, name:'Webpack', credit: 20 },
            {id: 3, name:'React', credit: 40}, 
        ];
        const wrapper = shallow(<CourseList listCourses={courses} />);
        
        expect(wrapper.find('CourseListRow')).toHaveLength(2); // Assuming you have one row per course
    });
});

