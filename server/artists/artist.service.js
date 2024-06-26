import { ArtistModel } from './artist.model'; // Adjust the path to where the model file is located

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
        return savedArtist;
    } catch (error) {
        console.error('Error creating artist:', error.message);
        throw error;
    }
};
