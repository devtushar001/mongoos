import movieModel from "../models/Movies.js";

const createDoc = async () => {
    try {
        // Creating new Document
        const insertDoc = new movieModel({
            name: 'Spider Man - 4',
            ratings: 4,
            money: 60000,
            genre: ['action', 'adventure'],
            isActive: true,
            comments: [{value: 'One of the best movie.'}, {value: 'I love too much this movie.'}]
        })
        const result = await insertDoc.save();
        console.log(result);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

export  {createDoc};