const mongoose = require('mongoose')

const ShowSchema = new mongoose.Schema({
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artists'
    },
    creatorName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price_per_ticket: {
        type: String,
        required: true
    },
    production: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    amount_of_tickets: {
        type: Number,
        required: true
    },
    picture_of_artist: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})


const ShowModel = mongoose.models?.Shows || mongoose.model('Shows', ShowSchema)
export default ShowModel;

