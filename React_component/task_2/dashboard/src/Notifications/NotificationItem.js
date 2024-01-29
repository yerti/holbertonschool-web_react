import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  handleClick = () => {
    const {id, markAsRead} = this.props;
    if(markAsRead) {
      markAsRead(id);
    }
  }
  
  render() {
    const {type='default', value, html} = this.props;


    return (
      <li className="notification-item" data-notification-type={type} onClick={this.handleClick}>
        {html ? (
          <div dangerouslySetInnerHTML={html} />
        ) : (
          <span>{value}</span>
        )}
      </li>
    );
  }
}

NotificationItem.propTypes = {
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
  markAsRead: null
};

export default NotificationItem;
