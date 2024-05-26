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
            ref: 'orders'
        }
    ],
    type: {
        type: String,
        enum: ['admin', 'user'],
        required: true
    }
})


const UserModel = mongoose.models.Users || mongoose.model('Users', UserSchema);
module.exports = UserModel;