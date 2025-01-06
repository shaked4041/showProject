const mongoose = require('mongoose')
const { UserModel } = require('../users/user.model')

const OrderSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users', //must be user
        required: true
    },
    showId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shows',
        required: true
    },
    amountOfTickets: {
        type: Number,
        required: true
    },
    finalPrice: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['draft', 'payed'],
        default: 'draft',
        required: true,
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    userDetails: { // Optional: To store user details directly in the order
        fullName: String,
        phoneNumber: String,
        email: String,
        birthDate: String,
        gender: String,
    }
})

export const OrderModel = mongoose.models?.Orders || mongoose.model('Orders', OrderSchema)