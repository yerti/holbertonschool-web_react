import React, { Component } from 'react';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const fadeIn ={
  '0%': { 
    opacity: 0.5
  },
  '100%': {
    opacity: 1
  },
};

// Definir keyframes para la animación de rebote
const bounce ={
  '0%, 20%, 50%, 80%, 100%': {
    transform: 'translateY(0)' 
  },
  '40%': {
    transform: 'translateY(-5px)'
  },
  '60%': {
    transform: 'translateY(5px)'
  },
};

const styles = StyleSheet.create({
  contentNotifications: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  menuItem: {
    marginRight: '10px',
    marginTop: '10px',
    float: 'right', 
    cursor: 'pointer', 
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 'infinite',
    },
  },
  notifications: {
    display: 'none',
    height: '150px',
    width: '400px',
    border: '2px dashed rgb(224, 32, 80)',
    marginRight: '10px',
    paddingLeft: '18px',
    marginTop: '30px',
    fontSize: '18px',
    backgroundColor: '#ffffff',
  },
  show: {
    display: 'block',
  },
  hide: {
    display: 'none',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  buttonImg: {
    width: '8px',
    position: 'absolute',
    right: '4%',
  },
  paragraph: {
    marginTop: '-4px',
  },

  samllNotification: {
    '@media (max-width: 900px)': {
      width: '100%',
      height: '117vh',
      position: 'absolute',
      top: '0',
      margin: '0',
      left: '0',
      padding: '0',
    }
  },
  smalUl: {
    '@media (max-width: 900px)': {
      padding: '0',
    }
  },
  smallParagraph: {
    '@media (max-width: 900px)': {
      fontSize:'20px'
    }
  }
});



class Notifications extends Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    // Update only if the new notification list is longer
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div className={css(styles.contentNotifications)}>
        <div className={css(styles.menuItem)}>Your notifications</div>
        <div className={css(styles.notifications, displayDrawer ? styles.show : styles.hide, styles.samllNotification)}>
          <button className={css(styles.button)} onClick={() => { console.log('Close button has been clicked') }}>
            <img className={css(styles.buttonImg)} src={close} alt='icon close' />
          </button>
          <p className={css(styles.paragraph, styles.smallParagraph)}>Here is the list of notifications</p>
          <ul className={css(styles.smalUl)}>
            {listNotifications.map(notification => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value || 'default'}
                html={notification.html}
                markAsRead={() => this.markAsRead(notification.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    html: PropTypes.shape({
      __html: PropTypes.string.isRequired,
    }),
    type: PropTypes.string,
    value: PropTypes.string,
  })),
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

export default Notifications;
