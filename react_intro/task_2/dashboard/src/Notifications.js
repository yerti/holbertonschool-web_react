import './Notifications.css';
import React, { useState } from 'react'
import { getLatestNotification } from './utils';

export default function Notifications() {
  const [mostarNotificaciones, setMostrarNotificaciones] = useState("true")

  const handeclick = () => {
    console.log("Close button has been clicked")
  }

  return (
    <div className='Notifications' onClick={handeclick}>
      <button aria-label="Close" style={{ display: "inline-block", float: "right" }}>
        <img src="/assets/image/close-icon.svg" alt="Cerrar" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default" style={{color: '#001B79'}}>Nuevo curso disponible</li>
        <li data-priority="urgent" style={{color: 'red'}}>Nuevo currículum disponible</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} style={{color: 'red'}}></li>
      </ul>
    </div>
  )
}
