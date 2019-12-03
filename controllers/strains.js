/*
const express = require('express')
const strainRouter = express.Router()
const axios = require('axios');


// get all 
strainRouter.get('/', (req, res) => {
    //let apikey= process.env.APIKEY
    let config = {
        headers: {
            "x-rapidapi-host": "StrainraygorodskijV1.p.rapidapi.com",
            "x-rapidapi-key": "b9e43c3d0cmshe28dcc757772815p18db44jsnda7d151d274b" 
        }
    }
    axios.get('https://strainraygorodskijv1.p.rapidapi.com/getAllStrains', config)
        .then((response) => {
            strainsData = response.data.api.stains
            wstains = []

            for (index = 0; index < strainsData.length; index++) {
                wstrains.push(strainsData[index].name)
            }
            res.json(wstains)
        })
}
)
module.exports = {
    strainRouter
}
*/