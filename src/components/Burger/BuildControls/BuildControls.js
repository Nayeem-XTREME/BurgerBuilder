import React from 'react'
import styles from './BuildControls.module.css'

import BuildControl from './BuildControl/BuildControl'

const controls = [
    {
        label: 'Salad',
        type: 'salad'
    },
    {
        label: 'Bacon',
        type: 'bacon'
    },
    {
        label: 'Cheese',
        type: 'cheese'
    },
    {
        label: 'Meat',
        type: 'meat'
    }
]

export default function BuildControls() {
    return (
        <div className={styles.BuildControls}>
            {controls.map(x => 
                <BuildControl key={x.label} label={x.label} />
            )}
        </div>
    )
}
