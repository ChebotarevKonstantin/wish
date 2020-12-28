const mongoose = require('mongoose')
const Schema = mongoose.Schema

const goodSchema = new Schema({
  titleGift: { type: String},
  description: { type: String },
  img: { type: String, default: 'https://st4.depositphotos.com/2381417/26959/i/600/depositphotos_269592716-stock-photo-thumbnail-images-placeholder-forums-blogs.jpg' },
  rate: { type: Number, default: 0 },
  tag: ["Все категории"],
  display: {type: Boolean, default: true}
})

module.exports = mongoose.model('Good', goodSchema)
