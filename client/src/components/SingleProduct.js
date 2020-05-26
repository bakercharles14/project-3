import React, { Component } from 'react'
import Products from '../ProductData.js'
import axios from 'axios'

export default class SingleProduct extends Component {

    state = {
        singleProduct: {
            name: "",
            image: "",
            description: "",
            price: 0
        }

    }

    componentDidMount() {
        this.getProductByIndex()
    }

    getProductByIndex = async () => {
        const productIndex = this.props.match.params.index
        const res = await axios.get(`/products/${productIndex}`)
        const newState = { ...this.state }
        newState.singleProduct = res.data
        this.setState(newState)
    }

    render() {
        return (
            <div>
                <div className='product-list'>
                    <div className='product-image'>
                        <img src={this.state.image} alt={this.state.name} width='270' height='350' />
                    </div>
                    <div className='product-item'>
                        <div className='product-name'>
                            <strong>Name: </strong>
                            {this.state.name}
                        </div>
                        <div className='product-price'>
                            <strong>Price: </strong>
                            {this.state.price}
                        </div>
                        <div>
                            <strong>Description: </strong>
                            {this.state.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
