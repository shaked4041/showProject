"use server"

import { connectToMongo } from "../connectToMongo";
import { createNewShowService } from "../shows/show.service";

export const createNewShow = async (fd) => {
    const obj = Object.fromEntries(fd);
    const parsedDateTime = new Date(obj.dateTime);

    console.log("show objectttttt", parsedDateTime);
    try {
        await connectToMongo()
        const showModelFill = {
            creatorId: '664e09b1959c493a8d50894e0',
            amount_of_tickets: 300,
            picture_of_artist: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonaskakaroto-736230.jpg&fm=jpg',
            creatorName: 'shaked ben hamo',
        }
        const newShow = { ...obj, ...showModelFill, date: parsedDateTime };
        const newShowFromDb = await createNewShowService(newShow)
        console.log({ newShowFromDb });
        return { message: 'created' };
    } catch (error) {
        console.log(error);
        return { message: 'not created' }
    }
}