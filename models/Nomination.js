const mongoose = require('mongoose')

const NominationSchema = mongoose.Schema({
    imdbID: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('nomination', NominationSchema)