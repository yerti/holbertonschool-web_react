import React from "react";
import './CourseList.css'
import CourseListRow from "./CourseListRow";

const CourseList = () => {
    return (
        <table id="CourseList">
            <caption><CourseListRow textFirstCell="Available courses"/></caption>
            <thead >
                <tr id="head-table">
                    <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
                </tr>
            </thead>
            <tbody>
                <tr>
                    <CourseListRow textFirstCell="ES6" textSecondCell="60" />
                </tr>
                <tr>
                    <CourseListRow textFirstCell="Webpack" textSecondCell="20" />
                </tr>
                <tr>
                    <CourseListRow textFirstCell="React" textSecondCell="40" />
                </tr>
            </tbody>
        </table>
    );
};

export default CourseList;