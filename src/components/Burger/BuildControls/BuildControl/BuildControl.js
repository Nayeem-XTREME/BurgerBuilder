import React from 'react'
import styles from './BuildControl.module.css'

export default function BuildControl({label, added}) {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{label}</div>
            <button className={styles.Less}>Less</button>
            <button className={styles.More} onClick={added}>More</button>
        </div>
    )
}
