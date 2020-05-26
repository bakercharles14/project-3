import React, { Component } from 'react'
import Products from '../ProductData.js'

export default class SingleProduct extends Component {

    //make state that matches product

    componentDidMount() {
        //get product from productdata array using index.
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
                            {this.props.name}
                        </div>
                        <div className='product-price'>
                            <strong>Price: </strong>
                            {this.props.price}
                        </div>
                        <div>
                            <strong>Description: </strong>
                            {this.props.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
