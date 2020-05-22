const mongoose = require('./connection.js')

const ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price: Number
})

const ProductModel = mongoose.model('product', ProductSchema)

const getAllProducts = () => {
    return ProductModel.find({})
}

const getProductById = (productId) => {
    return ProductModel.findById(productId)
}

const createProduct = (productData) => {
    return ProductModel.create(productData)
}

const updateProduct = (productId, productData) => {
    return ProductModel.updateOne({ _id: productId }, productData)
}

const deleteProduct = (productId) => {
    return ProductModel.findByIdAndDelete(productId)
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
