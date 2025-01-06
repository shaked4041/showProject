const mongoose = require('mongoose')
import '../shows/show.model';

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
    shows: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Shows'
        }
    ]


})


const ArtistModel = mongoose.models?.Artists || mongoose.model('Artists', ArtistSchema)
export default ArtistModel;
