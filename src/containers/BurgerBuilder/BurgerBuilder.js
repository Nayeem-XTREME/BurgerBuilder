import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 2,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    }

    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </div>
        )
    }
}
