const express = require('express')
const ProductModel = require('../models/product.js')

const productRouter = express.Router()

//get all
productRouter.get('/', async (req, res) => {
  try {
    const allProducts = await ProductModel.getAllProducts()
    res.json(allProducts)
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
})

//get one
productRouter.get('/:productId', async (req, res) => {
  try {
    const product = await ProductModel.getProductById(req.params.productId)
    res.json(product)
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
})

//create one
productRouter.post('/', async (req, res) => {
  try {
    await ProductModel.createProduct(req.body)
    res.json('ok')
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
})

//update one
productRouter.put('/:productId', async (req, res) => {
  try {
    await ProductModel.updateProduct(req.params.productId, req.body)
    res.json('ok')
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
})

//delete one
productRouter.delete('/:productId', async (req, res) => {
  try {
    await ProductModel.deleteProduct(req.params.productId)
    res.json("ok")
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
})

module.exports = productRouter