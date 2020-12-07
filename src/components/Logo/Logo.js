import React from 'react'
import styles from './Logo.module.css'
import burgerLogo from '../../assets/img/28.1 burger-logo.png'

export default function Logo({height}) {
    return (
        <div className={styles.Logo} style={{height: height}}>
            <img src={burgerLogo} alt="MyBarger" />
        </div>
    )
}
