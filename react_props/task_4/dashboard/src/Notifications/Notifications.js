import React from 'react';
import './Notifications.css';
import close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notifications({ displayDrawer }) {
  return (
    <div className='content-notifications'>
      <div className='menuItem'>Your notifications</div>
      <div className={`Notifications ${displayDrawer ? 'show' : 'hide'}`}>
        <button onClick={() => { console.log('Close button has been clicked') }}>
          <img src={close} alt='icon close' />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem
            type="default"  // Valor predeterminado para type
            value="New course available"
          />
          <NotificationItem
            type="urgent"  // Valor predeterminado para type
            value="New resume available"
          />
          <NotificationItem
            type="urgent"  // Valor predeterminado para type
            html={{ __html: getLatestNotification() }}
          />
        </ul>
      </div>
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: true,
};


