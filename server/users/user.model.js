const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Orders'
        }
    ],
    type: {
        type: String,
        enum: ['admin', 'user'],
        required: true
    }
})

export const UserModel = mongoose.models?.Users || mongoose.model('Users', UserSchema)

