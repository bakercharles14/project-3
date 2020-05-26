import React, { Component } from 'react'
import { cart } from '../CartData.js'

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
                <div className='cart-heading'>
                    <h1>Items in your Cart</h1>
                    <div><strong>Total: </strong>${cart.totalPrice}</div>
                    <div><strong>Total Items: </strong>{cart.quantity}</div>
                </div>

                {cart.products.map((product, index) => {
                    return (<div className='cart-item' key={`kjdhfslksdfsdh-${index}`}>
                        <img src={product.image} alt={product.name} width='60' height='auto' />
                        <div><strong>Name:</strong> {product.name}</div>
                        <div><strong>Description:</strong> {product.description}</div>
                        <div><strong>Price:</strong> ${product.price}</div>
                        <input onClick={() => {
                            cart.products.splice(product, 1)
                            console.log(cart.products)
                            this.componentDidMount()
                        }} type='submit' value='Remove Item From Cart' />
                    </div>)

                })}
                <div className='check-out-input'>
                    <input type='submit' onClick={() => {
                        if (window.confirm('Are you ready to check out?')) {
                            console.log('You checked out')
                        } else {
                            console.log('You are not ready to check out yet.')
                        }
                    }
                    } value='Check Out' />
                </div>

            </div>
        )
    }
}
