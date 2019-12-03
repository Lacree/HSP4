const mongoose = require('./connections.js')

const ProductsSchema = new mongoose.Schema({
    name: String,
    type: String,
    brand: String,
    strain: String
})

const ProductsCollection = mongoose.model('product', ProductsSchema)

//getAll
const getAllProducts = () => {
    return ProductsCollection.find({})
}

//getOne
const getOneProduct = (id) => {
    return ProductsCollection.findById({ _id: id })
}

//create
const createProduct = (productData) => {
    return ProductsCollection.create(productData)
}

//delete
const deleteProduct = (id) => {
    return ProductsCollection.deleteOne({ _id: id })
}


module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct,
    deleteProduct
}