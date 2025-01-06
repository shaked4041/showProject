import ArtistModel from './artist.model';

export const createArtist = async (fullName, image, description) => {
    if (!fullName || !image || !description) {
        throw new Error('Missing required fields: fullName, image, and description are required.');
    }

    try {
        const newArtist = new ArtistModel({
            fullName,
            image,
            description
        });
        const savedArtist = await newArtist.save();
        console.log('Artist created successfully:', savedArtist);
        return savedArtist.toObject ? savedArtist.toObject() : JSON.parse(JSON.stringify(savedArtist));
    } catch (error) {
        console.error('Error creating artist:', error.message);
        throw error;
    }
};

export const getArtists = async () => {
    try {
        const artists = await ArtistModel.find();
        return artists;
    } catch (error) {
        console.error('Error retrieving artists:', error.message);
        throw error;
    }
};


export const createNewArtistService = async (artist) => {
    console.log("serviceeeee", artist);
    return await ArtistModel.create(artist)
}

export const getArtistById = async (id) => {
    return await ArtistModel.findById(id);
}