import React from 'react'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    contentLogin: {
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
    },
    buttoLogin : {
        marginTop: '30px',
    }
})

export default function Login() {
    return (
        <>
            <p>Login to access the full dashboard</p>
            <div className={css(styles.contentLogin)}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                />
                
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                />

                <button className={css(styles.buttoLogin)}>OK</button>
            </div>
        </>
    )
}
