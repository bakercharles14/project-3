import React from 'react'
import ProductData from '../ProductData.js'
import { cart } from '../CartData.js'
import { Link } from 'react-router-dom'

export default class Products extends React.Component {
    state = {
        products: [],
        totalPrice: 0,
        quantity: 0
    }

    componentDidMount() {
        this.setState(cart)
    }


    // addToCart = async (evt, product) => {
    //     evt.preventDefault()
    //     try {
    //         const newState = await { ...this.state }
    //         newState.cart.products.push(product.data)
    //         this.setState(newState)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    render() {
        return (
            <div>
                <h1 className='products-title'>Products</h1>
                <div className='products-content'>
                    {ProductData.map((product, index) => {
                        return (
                            <div key={`;sdl;kfhsa;dlkh-${index}`} className='product-item'>
                                <Link to={`/products/${index}`}>
                                    <img className='product-image' src={product.image} alt={product.name} width='270' height='320' />
                                </Link>
                                <div className='product-words'>
                                    <div className='product-name'><strong>Name: </strong>{product.name}</div>
                                    <div><strong>Price: </strong>${product.price}</div>
                                    <div className='product-description'><strong>Description: </strong>{product.description}</div>
                                </div>
                                <input onClick={() => {
                                    cart.products.push(product)
                                    cart.totalPrice += product.price
                                    cart.quantity = cart.products.length
                                    console.log(cart.products)
                                }} type='submit' value='Add to Cart' />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
