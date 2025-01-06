"use server";

import { connectToMongo } from "../connectToMongo";
import { createArtist } from "../artists/artist.service";

export const createNewArtist = async (fd) => {
    const obj = Object.fromEntries(fd);
    // console.log("Form Data Object:", obj);

    const { fullName, image, description } = obj;
    if (!fullName || !image || !description) {
        console.log("Error: Missing required fields: fullName, image, and description are required.");
        return { message: 'Missing required fields: fullName, image, and description are required.' };
    }

    try {
        await connectToMongo();
        const newArtistFromDb = await createArtist(fullName, image, description);
        const plainArtist = newArtistFromDb.toObject ? newArtistFromDb.toObject() : JSON.parse(JSON.stringify(newArtistFromDb));
        console.log("New Artist from DB (plain object):", plainArtist);
        return plainArtist;
    } catch (error) {
        console.log("Error:", error);
        return { message: 'not created' };
    }
}
