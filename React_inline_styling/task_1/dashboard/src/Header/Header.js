import React from 'react';
import Logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  appHeaderImg: {
    width: '220px',
  },
  appHeaderH1: {
    fontSize: '40px',
    color: 'var(--red)',
  }
})

export default function Header() {
  return (
    <>
      <div className={css(styles.appHeader)}>
        <img className={css(styles.appHeaderImg)} src={Logo} alt='logo of holberton school' />
        <h1 className={css(styles.appHeaderH1)}>School dashboard</h1>
      </div>
    </>
  )
}
