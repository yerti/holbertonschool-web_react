import React from "react";
import './CourseList.css'
import PropTypes from 'prop-types';
import CourseListRow from "./CourseListRow";

const CourseList = ({ listCourses }) => {
    return (
        <table id="CourseList">
            <caption><CourseListRow textFirstCell="Available courses" /></caption>
            <thead>
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses && listCourses.length > 0 ? (
                    listCourses.map(course => (
                        <CourseListRow textFirstCell={course.name} textSecondCell={course.credit} />
                    ))
                ) : (
                    <tr>
                        <CourseListRow textFirstCell="No course available yet" />
                    </tr>
                )}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        credit: PropTypes.number.isRequired,
    })),
};

export default CourseList;
