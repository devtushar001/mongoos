import movieModel from '../models/Movies.js';

const findById = async () => {
   try {
    // const result = await movieModel.findById("66f2a3aafe204c4007e72060");
    // const result = await movieModel.findById("66f2a3aafe204c4007e72066");
    // console.log(result._id);
    // console.log(result.name);
    // console.log(result.ratings);
    // console.log(result.money);
    // console.log(result.genre);
    // console.log(result.isActive);
    // console.log(result.comments);
    // console.log(result);
    // const result = await movieModel.findById("66f2a3aafe204c4007e72069", "name");
    // const result = await movieModel.findById("66f2a3aafe204c4007e72069", "comments");
   //  const result = await movieModel.findById("66f3a6bbdec2b79e93b67ac7", "genre");
   //  const res1 = await movieModel.findById("66f3a6bbdec2b79e93b67ac7", "comments");
   //  const res2 = await movieModel.findById("66f3a6bbdec2b79e93b67ac7", "name");
   //  const res2 = await movieModel.findById("66f3a6bbdec2b79e93b67ac7", "money");
    const res2 = await movieModel.findById("66f3a6bbdec2b79e93b67ac7", "genre");

   //  console.log(result);
    console.log(res2._id);
    console.log(res2.genre);
    console.log(res2.genre[0]);
    console.log(res2.genre[1]);
    console.log(res2.genre[2]);
   } catch (error) {
    console.log(error.name);
    console.log(error.message);
   }
}

export { findById };