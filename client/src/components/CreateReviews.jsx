import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


export default class CreateReviews extends Component {
    state = {
        redirect: false,
        newReview: {
            author: "",
            review: "",
            publicationDate: ""
        },
        createdReviewId: null
    }

    componentDidMount() {
        console.log('create review page')
    }
    handelNewReview = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;
        const newReview = { ...this.state.newReview };
        newReview[attributeName] = attributeValue;
        this.setState({ newReview })
    }


    addNewReview = (event) => {
        event.preventDefault()

        axios.post('/api/review', this.state.newReview)
            .then(createdReview => {
                const newState = { ...this.state }
                newState.createdReviewId = createdReview._id
                newState.redirect = true
                this.setState(newState)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewReview}>
                    {this.state.redirect ? (<Redirect to={'/reviews'} />) : null}

                    <div>
                        <input
                            name='author'
                            type='text'
                            placeholder='Author'
                            value={this.state.newReview.author}
                            onChange={this.handelNewReview}
                        />
                    </div>
                    <div>
                        <input
                            name='review'
                            type='text'
                            placeholder='Review/Article'
                            value={this.state.newReview.review}
                            onChange={this.handelNewReview}
                        />
                    </div>
                    <div>
                        <div>
                            <input
                                name='publicationDate'
                                type='text'
                                placeholder='Date Published'
                                value={this.state.newReview.publicationDate}
                                onChange={this.handelNewReview}
                            />
                        </div>
                        <input
                            type='submit'
                            value='Create A Review'
                        />
                    </div>
                </form>
            </div>
        )
    }
}