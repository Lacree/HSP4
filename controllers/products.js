const express = require('express')

const ProductApi = require('../models/Products.js')

const productRouter = express.Router()

//getAll
productRouter.get('/', (req, res) => {
    ProductApi.getAllProducts()
        .then((allProducts) => {
            res.json(allProducts)
        })
})

//getOne
productRouter.get('/:id', (req, res) => {
    ProductApi.getSingleProduct(req.params.id)
        .then((singleProduct) => {
            res.json(singleProduct)
        })
})

//create
productRouter.post('/', (req, res) => {
    ProductApi.createProduct(req.body)
        .then((createdProduct) => {
            res.json(createdProduct)
        })
})

//delete
productRouter.delete('/:id', (req, res) => {
    ProductApi.deleteProduct(req.params.id)
        .then((deletedProduct) => {
            res.json(deletedProduct)
        })
})

module.exports = {
    productRouter
}