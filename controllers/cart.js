const express = require('express')
const CartModel = require('../models/cart.js')

const cartRouter = express.Router()

//get all
cartRouter.get('/', async (req, res) => {
    try {
        const allCarts = await CartModel.getAllCarts()
        res.json(allCarts)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

//get one
cartRouter.get('/:cartId', async (req, res) => {
    try {
        const cart = await CartModel.getCartById(req.params.cartId)
        res.json(cart)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

//create one
cartRouter.post('/', async (req, res) => {
    try {
        await CartModel.createCart(req.body)
        res.json('ok')
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

//update one
cartRouter.put('/:cartId', async (req, res) => {
    try {
        await CartModel.updateCart(req.params.cartId, req.body)
        res.json('ok')
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

//delete one
cartRouter.delete('/:cartId', async (req, res) => {
    try {
        await CartModel.deleteCart(req.params.cartId)
        res.json("ok")
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

module.exports = cartRouter