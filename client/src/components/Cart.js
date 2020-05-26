import React, { Component } from 'react'
import Products from './Products.js'
import { cart, removeItemFromCart } from '../CartData.js'

export default class Cart extends Component {

    state = {
        products: [],
        totalPrice: 0,
        quantity: 0
    }

    componentDidMount() {
        this.setState(cart)
    }

    render() {
        return (
            <div>
                <h1>Items in your Cart</h1>
                {cart.products.map((product, index) => {
                    return (<div key={`kjdhfslksdfsdh-${index}`}>
                        <div>{product.name}</div>
                        <div>{product.description}</div>
                        <div>{product.price}</div>
                        <input onClick={() => removeItemFromCart} type='submit' value='Remove Item From Cart' />
                    </div>)
                })}

            </div>
        )
    }
}
