import movieModel from '../models/Movies.js';

const findById = async () => {
   try {
    const result = await movieModel.findById("66f2a3aafe204c4007e72060");
    console.log(result);
   } catch (error) {
    console.log(error.name);
    console.log(error.message);
   }
}

export { findById };