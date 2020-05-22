const mongoose = require('./connection.js')

const CartSchema = new mongoose.Schema({
    products: Array,
    totalPrice: Number,
    quantities: Number
})

const CartModel = mongoose.model('cart', CartSchema)

const getAllCarts = () => {
    return CartModel.find({})
}

const getCartById = (cartId) => {
    return CartModel.findById(cartId)
}

const createCart = (cartData) => {
    return CartModel.create(cartData)
}

const updateCart = (cartId, cartData) => {
    return CartModel.updateOne({ _id: cartId }, cartData)
}

const deleteCart = (cartId) => {
    return CartModel.findByIdAndDelete(cartId)
}

module.exports = {
    getAllCarts,
    getCartById,
    createCart,
    updateCart,
    deleteCart
}
