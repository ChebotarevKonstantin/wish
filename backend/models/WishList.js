const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishListSchema = new Schema({
    titleWish: { type: String, required: true },
    gifts:
        // {type: Array, required: false},
        [
        {
        type: mongoose.Schema.Types.ObjectId, required: false,
        ref: 'Good'
    }],
    giftsNotHold:
        // {type: Array, required: false},
        [
        {
            type: mongoose.Schema.Types.ObjectId, required: false,
            ref: 'Good'
        }],
    user: {
            type: mongoose.Schema.Types.ObjectId, required: false,
            ref: 'User'
         },
    display: {type: Boolean}
})

module.exports = mongoose.model('WishList', wishListSchema)