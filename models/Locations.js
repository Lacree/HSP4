const mongoose = require('./connections.js')

const LocationsSchema = new mongoose.Schema({
street: String,
city: String
})

const LocationsCollection = mongoose.model('location', LocationsSchema)

//getAllLocations
const getAllLocations = () => {
    return LocationsCollection.find({})
}

//getOneLocation
const getOneLocation = (id) => {
    return LocationsCollection.findById(id)
}

//createLocations
const createLocation = (locationData) => {
    return LocationsCollection.create(locationData)
}

//updateLocations
const updateLocations = (id, locationData) => {
    return LocationsCollection.updateOne({ _id: id }, locationData)
}

//deleteLocations
const deleteLocation = (id) => {
    return LocationsCollection.deleteOne({ _id: id })
}


module.exports = {
    getAllLocations,
    getOneLocation,
    createLocation,
    updateLocations,
    deleteLocation
}