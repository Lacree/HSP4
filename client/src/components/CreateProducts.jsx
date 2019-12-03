import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class CreateProducts extends Component {
    state = {
        redirect: false,
        newProduct: {
            name: "",
            type: "",
            brand: "",
            strain: ""
        },
        createdProductId: null
    }
    componentDidMount(){
        console.log('create product page')
    }

    handleNewProduct = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;
        const newProduct = { ...this.state.newProduct };
        newProduct[attributeName] = attributeValue;
        this.setState({ newProduct })
    }


    addNewProduct = (event) => {
        event.preventDefault()

        axios.post('/api/product', this.state.newProduct)
            .then(createdProduct => {
                const newState = { ...this.state }
                newState.createdProductId = createdProduct._id
                newState.redirect = true
                this.setState(newState)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewProduct}>

                    {this.state.redirect ? (<Redirect to={`/products`} />) : null}

                    <div>
                        <input
                            name='name'
                            type='text'
                            placeholder='Product Name'
                            value={this.state.newProduct.name}
                            onChange={this.handleNewProduct}
                        />
                    </div>
                    <div>
                        <input
                            name='type'
                            type='text'
                            placeholder='What is it?'
                            value={this.state.newProduct.type}
                            onChange={this.handleNewProduct}
                        />
                    </div>
                    <div>
                    <input
                        name='brand'
                        type='text'
                        placeholder="Who's the Company?"
                        value={this.state.newProduct.brand}
                        onChange={this.handleNewProduct}
                    />
                    </div>
                    <div>
                    <div>
                    <select
                        name='strain'
                        //type='text'
                        //placeholder="What's the strain?"
                        value={this.state.newProduct.strain}
                        onChange={this.handleNewProduct}
                    />
                    </div>
                        <input
                            type="submit"
                            value="Create A Product"
                        />
                    </div>
                </form>

            </div>
        )
    }
}
