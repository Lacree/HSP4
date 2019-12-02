import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'



export default class CreatePatients extends Component {
    state = {
        redirect: false,
        newPatient: {
            name: "",
            age: "",
            topStrain: "",
            why: ""
        },
        createdPatientId: null
    }
    handelNewPatient = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;
        const newPatient = { ...this.state.newPatient };
        newPatient[attributeName] = attributeValue;
        this.setState({ newPatient })
    }

    addNewPatient = (event) => {
        event.preventDefault();

        axios.post('/api/patient', this.state.newPatient)
            .then(createdPatient => {
                const newState = { ...this.state }
                newState.createdPatientId = createdPatient._id
                newState.redirect = true
                this.setState(newState)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewPatient} >

                    {this.state.redirect ? (<Redirect to={`/patients`} />) : null}

                    <div>
                        <input
                            name='name'
                            type='text'
                            placeholder='Whats your name?'
                            value={this.state.newPatient.name}
                            onChange={this.handelNewPatient}
                        />
                    </div>
                    <div>
                        <input
                            name='age'
                            type='text'
                            placeholder='How old are you?'
                            value={this.state.newPatient.age}
                            onChange={this.handelNewPatient}

                        />
                    </div>
                    <div>
                        <input
                            name='topStrain'
                            type='text'
                            placeholder='Favorite Strain?'
                            value={this.state.newPatient.topStrain}
                            onChange={this.handelNewPatient}

                        />
                    </div>
                    <div>
                        <input
                            name='why'
                            type='text'
                            placeholder='Why?'
                            value={this.state.newPatient.why}
                            onChange={this.handelNewPatient}
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Create A New Patient"
                        />
                    </div>
                </form>
            </div>
        )
    }
}
