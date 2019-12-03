const express = require('express')
const productRouter = express.Router()
const axios = require('axios');


// get all 
productRouter.get('/', (req, res) => {
    //let apikey= process.env.APIKEY
    let config = {
        headers: {
            "x-rapidapi-host": "StrainraygorodskijV1.p.rapidapi.com",
            "x-rapidapi-key": "b9e43c3d0cmshe28dcc757772815p18db44jsnda7d151d274b" 
        }
    }
    axios.get('https://strainraygorodskijv1.p.rapidapi.com/getAllStrains', config)
        .then((response) => {
            productData = response.data.api.products
            products = []

            for (index = 0; index < productsData.length; index++) {
                products.push(teamsData[index].name)
            }
            res.json(products)
        })
}
)
module.exports = {
    productRouter
}