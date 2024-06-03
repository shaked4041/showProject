"use server"

import { connectToMongo } from "../connectToMongo";
import { createNewShowService } from "../shows/show.service";

export const createNewShow = async (fd) => {
    const obj = Object.fromEntries(fd);
    try {
        await connectToMongo()
        const showModelFill = {
            // creatorId: '664e09b1959c493a8d50894e0',
            amount_of_tickets: 300,
            picture_of_artist: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png',
            creatorName: 'shaked ben hamo',
            // artistId: '664e0dea0e1d0ad12a33c7e3'
        }
        const newShow = {...obj, ...showModelFill }
        const newShowFromDb = await createNewShowService(newShow)
        console.log({ newShowFromDb });
    } catch (error) {
        console.log(error);
        return { message: 'not created' }
    }
    console.log(obj);
}