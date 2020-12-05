import React from 'react'
import style from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

export default function Burger() {
    return (
        <div className={style.Burger}>
            <BurgerIngredients type="bread-top" />
            <BurgerIngredients type="cheese" />
            <BurgerIngredients type="meat" />
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}
