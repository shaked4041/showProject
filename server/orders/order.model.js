const mongoose = require('mongoose')


const OrderSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' //must be user
    },
    showName: {
        type: String,
        required: true
    },
    showId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'show'
    },
    amountOfTickets: {
        type: Number,
        required: true
    },
    finelPrice: {
        type: Number,
        required: true
    }

})

export const OrderModel = mongoose.models?.Orders || mongoose.model('Orders', OrderSchema)