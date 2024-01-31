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
  },


  smallHeaderTitle: {
    '@media (max-width: 900px)': {
      fontSize: '25px'
    }
  },
  smallImage: {
    '@media (max-width: 900px)': {
      width: '100px'
    }
  },
})

export default function Header() {
  return (
    <>
      <div className={css(styles.appHeader, styles.smallContentHeader)}>
        <img className={css(styles.appHeaderImg, styles.smallImage)} src={Logo} alt='logo of holberton school' />
        <h1 className={css(styles.appHeaderH1, styles.smallHeaderTitle)}>School dashboard</h1>
      </div>
    </>
  )
}
