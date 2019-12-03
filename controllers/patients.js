const express = require('express')

const PatientApi = require('../models/Patients.js')

const patientRouter = express.Router()

//getAll
patientRouter.get('/', (req, res) => {
    PatientApi.getAllPatients()
        .then((AllPatients) => {
            res.json(AllPatients)
        })
})


//getOne
patientRouter.get('/:id', (req, res) => {
    PatientApi.getOnePatient(req.params.id)
        .then((singlePatient) => {
            res.json(singlePatient)
        })
})


//create
patientRouter.post('/', (req, res) => {
    PatientApi.createPatient(req.body)
        .then((createdPatient) => {
            res.json(createdPatient)
        })
})


//delete
patientRouter.delete('/:id', (req, res) => {
    PatientApi.deletePatient(req.params.id)
        .then((deletedPatient) => {
            res.json(deletedPatient)
        })
})

module.exports = {
    patientRouter
}