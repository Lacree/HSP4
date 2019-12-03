import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Patients extends Component {
    state = {
        patients: []
    }


    componentDidMount = () => {
        axios.get('/api/patient')
            .then((response) => {
                this.setState({ patients: response.data })
            })
    }


    render() {
        console.log(this.state.patients)
        return (
            <div>
                <h1>Canna Patients</h1>
                {this.state.patients.map((patient) => {
                    return (
                        <div key={patient._id}>
                            <Link to={`/patients/${patient._id}`}><h5>{patient.name}</h5></Link>
                        </div>
                    )
                })}
                <footer><img src='https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2012/09/snoop_2_a_h.jpg' />

                </footer>
                <Link to='/'>Main Menu</Link>
            </div>
        )
    }
}
