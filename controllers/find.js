import movieModel from "../models/Movies.js";

const findeMethod = async () => {
    try {
        // const result = await movieModel.find({ name: "Eternals"});
        // const result = await movieModel.find({ name: "Luca"});
        // const result = await movieModel.find().skip(18);
        // const result = await movieModel.find().countDocuments();
        const result = await movieModel.find().sort({name: -1});
        // const result = await movieModel.find().sort({ratings: -1});
        result.forEach(movie => {
            console.log(movie.name);
            console.log(movie.ratings);
        })
        // console.log(result);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

export default findeMethod;