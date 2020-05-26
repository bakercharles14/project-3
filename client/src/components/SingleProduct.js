import React, { Component } from 'react'
import Products from '../ProductData.js'

export default class SingleProduct extends Component {

    state = {
        name: "",
        image: "",
        description: "",
        price: 0
    }

    componentDidMount(index) {
        this.setState(Products[index])
    }

    render() {
        return (
            <div>
                <div className='product-list'>
                    <div className='product-image'>
                        <img src={this.props.image} alt={this.props.name} width='270' height='350' />
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
