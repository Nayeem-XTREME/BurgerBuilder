import React from 'react'
import Button from '../../UI/Button/Button'

export default function OrderSummery({ingredients, purchaseCancelled, purchaseContinued}) {
    const ingredientSummery = Object.keys(ingredients).map(i => {
        return (
            <li key={i}> 
                <span style={{ textTransform: 'capitalize' }}>{i}</span>: {ingredients[i]} 
            </li>
        )
    });

    return (
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={purchaseContinued}>CONTINUE</Button> 
        </div>
    )
}
