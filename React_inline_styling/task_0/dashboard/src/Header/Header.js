import React from 'react'
import Logo from '../assets/holberton-logo.jpg'
import './Header.css'

export default function Header() {
  return (
    <>
      <div className='App-header'>
        <img src={Logo} alt='logo of holberton school' />
        <h1>School dashboard</h1>
      </div>
    </>
  )
}
