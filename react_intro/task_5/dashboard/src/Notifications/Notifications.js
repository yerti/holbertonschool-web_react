import React from 'react'
import './Notifications.css'
import close from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'

export default function Notifications() {
  return (
    <div className='Notifications'>
      <button onClick={() => { console.log('Close button has been clicked') }}>
        <img src={close} alt='icon close' />
      </button>
      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default" style={{ color: '#001B79' }}>New course available</li>
        <li data-priority="urgent" style={{ color: 'red' }}>New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} style={{ color: 'red' }}></li>
      </ul>
    </div>
  )
}