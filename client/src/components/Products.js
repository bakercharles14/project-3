import React from 'react'
import ProductData from '../ProductData.js'
import { Link } from 'react-router-dom'

export default class Products extends React.Component {
    render() {
        return (
            <div>
                <h1>Products</h1>
                {ProductData.map((product, index) => {
                    return (
                        <div key={`;sdl;kfhsa;dlkh-${index}`} className='product-item'>
                            <Link to={`/product/${product._id}`}>
                                <img className='product-image' src={product.image} alt={product.name} width='270' height='350' />
                            </Link>
                            <div className='product-words'>
                                <div className='product-name'><strong>Name: </strong>{product.name}</div>
                                <div><strong>Price: </strong>{product.price}</div>
                                <div className='product-description'><strong>Description: </strong>{product.description}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
