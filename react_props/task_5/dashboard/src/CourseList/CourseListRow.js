import React from "react";
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
    if (isHeader) {
        return (
            <>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
            </>
        );
    } else {
        return (
            <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </>
        );
    }
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;