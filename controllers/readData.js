import movieModel from '../models/Movies.js'
const allDoc = async () => {
    try {
        const result = await movieModel.find(); // All the documents present on database
        result.forEach(movie => {
            // console.log(movie._id);
            // console.log(movie.name);
            // console.log(movie.money);
            // console.log(movie.genre[0]);
            // console.log(movie.genre[1]);
            // console.log(movie.isActive);
            console.log(movie.comments[0].value);
            // console.log(movie.comments[1]);
        });
        // console.log(result);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}
export { allDoc };