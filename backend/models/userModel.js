const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a Name'],
    },
    email: {
        type: String,
        required: [true, 'Please add a Email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a Password'],
        unique: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('User', userSchema)