const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  login: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  regDate: { type: Date, default: Date.now },
  wishlists: [],
  avatar: {type: String, default: 'https://bestlivingjapan.com/wp-content/uploads/2019/11/Roppongi-Hills-Santa.jpg'}
})

module.exports = mongoose.model('User', userSchema)
