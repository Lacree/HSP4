import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export default class PatientData extends Component {

    state = {
        patient: {}
    }

    deletePatient = () => {
        axios.delete('/api/patient/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ deleted: true })
                console.log(response)
            })
    }

    componentDidMount = () => {
        axios.get('/api/patient/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ patient: response.data })
                console.log(this.state)
            })
    }
    

    render() {
        if (this.state.hasOwnProperty('deleted') && this.state.deleted) {
            return (
                <div>
                    Patient was deleted
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Patients Details</h1>
                    <h5>Name: {this.state.patient.name}</h5>
                    <h5>Age: {this.state.patient.age}</h5>
                    <h5>topStrain: {this.state.patient.topStrain}</h5>
                    <h5>Why: {this.state.patient.why}</h5>
                    
                    <button onClick={this.deletePatient}> Delete This Patient </button>
                    <button>
                    <Link to='/'> Main Menu</Link>
                    </button>
                </div>
            )
        }
    }
}