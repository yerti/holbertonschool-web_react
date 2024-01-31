import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notificationItem: {
    cursor: 'pointer',
  },

  notificationItemDefault: {
    color: 'rgb(61, 32, 224)',
  },

  notificationItemUrgent: {
    color: 'rgb(224, 32, 80)',
  },
  smallLi:{
    '@media (max-width: 900px)': {
      fontSize: '20px'
    }
  }
});

const NotificationItem = ({ id, type = 'default', value, html, markAsRead }) => {
  const handleClick = () => {
    if (markAsRead) {
      markAsRead(id);
    }
  };

  const conditionalStyle = type === 'urgent' ? styles.notificationItemUrgent : styles.notificationItemDefault;
  
  return (
    <li className={`${css(styles.notificationItem)} ${css(conditionalStyle)} ${css(styles.smallLi)}`} data-notification-type={type} onClick={handleClick}>
      {html ? (
        <div dangerouslySetInnerHTML={html} />
      ) : (
        <span>{value}</span>
      )}
    </li>
  );
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired, 
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  value: '',
  html: null,
  markAsRead: null,
};

export default React.memo(NotificationItem);

