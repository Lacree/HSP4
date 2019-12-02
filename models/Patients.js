const mongoose = require('./connections.js')

const PatientsSchema = new mongoose.Schema({
    name: String,
    age: String,
    topStrain: String,
    Why: String
})

const PatientsCollection = mongoose.model('patient', PatientsSchema)

//getAll
const getAllPatients = () => {
    return PatientsCollection.find({})
}

//getOne
const getSinglePatient = (id) => {
    return PatientsCollection.findById(id)
}

//create
const createPatient = (patientData) => {
    return PatientsCollection.create(patientData)
}

//delete
const deletePatient = (id) => {
    return PatientsCollection.deleteOne({ _id: id })
}

module.exports = {
    getAllPatients,
    getSinglePatient,
    createPatient,
    deletePatient
}