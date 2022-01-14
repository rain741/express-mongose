const mongoose = require ("mongoose")
const {Schema} = mongoose

const courseSchema = new Schema({
    name : String,
    price : Number,
    module : Number
})

const course = mongoose.model('course', courseSchema)

module.exports = course