const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    concern: {
        type: String,
        required: [true, 'Let us know your concern.'],
        enum: ['Mental Health', 'Marital Worries', 'Job/Work Stress', 'Feeling of Guilt', 'Anxiety', 'Substance Abuse']
    },
    description: {
        type: String,
        required: [true, 'Tell us your story'],
    },
    status: {
        type: String,
        required: true,
        enum: ['new', 'open', 'Awaiting Response', 'closed'],
        default: 'new',
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Ticket', ticketSchema)