import React from "react";
import PropTypes from 'prop-types';
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    courseList: {
        width: '97%',
        textAlign: 'left',
        border: '1px solid #bbbbbb',
    },
    caption: {
        border: '1px solid #bbbbbb',
    },
    tbody: {
        borderTop: '2px solid #bbbbbb',
    },
})

const CourseList = ({ listCourses }) => {
    return (
        <table className={css(styles.courseList)} id="CourseList">
            <caption className={css(styles.caption)}><CourseListRow textFirstCell="Available courses" /></caption>
            <thead>
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody className={css(styles.tbody)}>
                {listCourses && listCourses.length > 0 ? (
                    listCourses.map(course => (
                        <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
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
