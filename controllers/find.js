import movieModel from "../models/Movies.js";

const findeMethod = async () => {
    try {
        // const result = await movieModel.find({ name: "Eternals"});
        const result = await movieModel.find({ name: "Luca"});
        console.log(result);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

export default findeMethod;