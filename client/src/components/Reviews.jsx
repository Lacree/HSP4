import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class Reviews extends Component {
    state = {
        reviews: []
    }
    componentDidMount = () => {
        axios.get('/api/review')
            .then((response) => {
                this.setState({ reviews: response.data })
            })

    }
    render() {
        console.log(this.state.reviews)
        return (
            <div>
                <h1>Canna Reviews & Articles</h1>
                {this.state.reviews.map((review) => {
                    return (
                        <div key={review._id}>
                            <Link to={`/reviews/${review._id}`}><h2>{review.author}</h2></Link>
                        </div>
                    )

                })}
                <Link to='/'>Main Menu</Link>
            </div>
        )
    }
}
