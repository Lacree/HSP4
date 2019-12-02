const mongoose = require('./connections.js')

const ReviewsSchema = new mongoose.Schema({
    author: String,
    review: String,
    publicationDate: Number 
})

const ReviewsCollection = mongoose.model('review', ReviewsSchema)

//getAll
const getAllReviews = () => {
    return ReviewsCollection.find({})
}

//getone
const getoneReview = (id) => {
    return ReviewsCollection.findById(id)
}

//create
const createReview = (reviewData) => {
    return ReviewsCollection.create(reviewData)
}

//delete
const deleteReview = (id) => {
    return ReviewsCollection.deleteOne({ _id: id })
}

module.exports = {
    getAllReviews,
    getoneReview,
    createReview,
    deleteReview
}