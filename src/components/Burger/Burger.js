import React from 'react'
import style from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

export default function Burger({ingredients}) {

    let trasformedIngredients = Object.keys(ingredients).map(x => {
            return [...Array(ingredients[x])].map((_, y) => {
                return <BurgerIngredients key={x+y} type={x}/>
            })
        });
    
    // console.log(trasformedIngredients);

    const checkIng = trasformedIngredients.reduce((prev, curr) => {
        return prev.concat(curr)
    }, [])

    // console.log(checkIng);

    if (checkIng.length === 0) {
        trasformedIngredients = <p>Please add some ingredients!</p>
    }

    return (
        <div className={style.Burger}>
            <BurgerIngredients type="bread-top" />
            {trasformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}
