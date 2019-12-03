const express = require('express')
const app = express()


const { productRouter } = require('./controllers/products.js')
const { reviewRouter } = require('./controllers/reviews.js')
const { patientRouter } = require('./controllers/patients.js')




app.use(express.urlencoded({ extended: true }))


app.use(express.json())

app.use(express.static(`${__dirname}/client/build`))

app.use('/api/product', productRouter)
app.use('/api/review', reviewRouter)
app.use('/api/patient', patientRouter)


app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
