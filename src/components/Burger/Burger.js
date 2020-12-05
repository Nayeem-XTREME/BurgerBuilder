import React from 'react'
import style from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

export default function Burger({ingredients}) {

    const trasformedIngredients = Object.keys(ingredients).map(x => {
            return [...Array(ingredients[x])].map((_, y) => {
                return <BurgerIngredients key={x+y} type={x}/>
            })
        });

    return (
        <div className={style.Burger}>
            <BurgerIngredients type="bread-top" />
            {trasformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}
