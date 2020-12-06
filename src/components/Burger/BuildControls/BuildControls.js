import React from 'react'
import styles from './BuildControls.module.css'

import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

export default function BuildControls({ingredientAdded, ingredientRemoved, disabled, price, purchaseable, ordered}) {
    return (
        <div className={styles.BuildControls}>
            <p>Current Price: <strong>{price.toFixed(2)}</strong></p>
            {controls.map(x => 
                <BuildControl 
                    key={x.label} 
                    label={x.label} 
                    added={() => ingredientAdded(x.type)} 
                    removed={() => ingredientRemoved(x.type)}
                    disabled={disabled[x.type]}
                />
            )}
            <button className={styles.OrderButton} disabled={!purchaseable} onClick={ordered}>
                ORDER NOW
            </button>
        </div>
    )
}
