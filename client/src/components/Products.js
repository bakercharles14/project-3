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
                <h1>Products</h1>
                {ProductData.map((product, index) => {
                    return (
                        <div key={`;sdl;kfhsa;dlkh-${index}`} className='product-item'>
                            <Link to={`/products/${index}`}>
                                <img className='product-image' src={product.image} alt={product.name} width='270' height='350' />
                            </Link>
                            <div className='product-words'>
                                <div className='product-name'><strong>Name: </strong>{product.name}</div>
                                <div><strong>Price: </strong>{product.price}</div>
                                <div className='product-description'><strong>Description: </strong>{product.description}</div>
                            </div>
                            <input onClick={() => {
                                const newState = { ...this.state }
                                newState.products.push(product)
                                this.setState(newState)
                                console.log(this.state.products)
                            }} type='submit' value='Add to Cart' />
                        </div>
                    )
                })}
            </div>
        )
    }
}
