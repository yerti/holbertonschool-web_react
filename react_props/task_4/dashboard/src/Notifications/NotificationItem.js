import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({ type = 'default', value, html }) {
  return (
    <li className="notification-item" data-notification-type={type}>
      {html ? (
        <div dangerouslySetInnerHTML={html} />
      ) : (
        <span>{value}</span>
      )}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  value: '',
  html: null,
};

