import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class ProductData extends Component {

    state = {
        product: {}
    }

    deleteProduct = () => {
        axios.delete('/api/product/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ deleted: true })
                console.log(response)
            })
    }

    componentDidMount = () => {
        axios.get('/api/product/' + this.props.match.params.id)
            .then((response) => {
                this.setState({ product: response.data })
                console.log(this.state)
            })
    }

    render() {
        if (this.state.hasOwnProperty('deleted') && this.state.deleted) {
            return (
                <div>
                    Product has been deleted
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Product Details </h1>
                    <h5>type: {this.state.product.type}</h5>
                    <h5>brand: {this.state.product.brand}</h5>
                    <h5>strain: {this.state.product.strain}</h5>
                    <button onClick={this.deleteProduct}>Delete This Product</button>
                    <button>
                    <Link to='/'>Main Menu</Link>
                    </button>
                </div>
            )
        }
    }
}



