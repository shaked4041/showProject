const mongoose = require('mongoose')


const ArtistSchema = new mongoose.Schema({
fullName: {
    type: String,
    required: true
},
image: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
shows:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shows'
    }
]


})


export const ArtistModel = mongoose.models?.Artists || mongoose.model('Artists', ArtistSchema)