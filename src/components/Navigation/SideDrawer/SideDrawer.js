import React from 'react'
import styles from './SideDrawer.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

export default function SideDrawer() {



    return (
        <div className={styles.SideDrawer}>
            <div className={styles.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    )
}
