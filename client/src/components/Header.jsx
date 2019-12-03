import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {

    render() {
        return (
            <div>
                <button>
                    <Link to="/products">Canna Essentails</Link>
                </button>

                <button>
                    <Link to="/patients">Canna Patients</Link>
                </button>

                <button>
                    <Link to="/reviews">Canna Reviews</Link>
                </button>

                <button>
                    <Link to="/patients/new">Create Canna Patient</Link>
                </button>

                <button>
                    <Link to="/products/new">Create Canna Product</Link>
                </button>

                <button>
                    <Link to="/reviews/new">Create Canna Review</Link>
                </button>
                <div>
                </div>
            </div>


        )
    }
}
