import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

export default class Products extends Component {
    state = {
        products: []

    }

    componentDidMount = () => {
        axios.get('/api/product')
            .then((response) => {
                this.setState({ products: response.data })
            })
    }



    render() {
        return (
            <div>
                <h1>Canna Products</h1>
                {this.state.products.map((product) => {
                    return (
                        <div key={product._id}>
                            <Link to={`/products/${product._id}`}><h5>{product.name}</h5></Link>

                        </div>
                    )
                })}
                
                <ReactPlayer
            url="https://youtu.be/Zzrh5GftgzM"
        />
                <Link to='/'>Main Menu</Link>
            </div>
        )
    }
}
