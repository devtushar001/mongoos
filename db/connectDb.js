import mongoose from "mongoose";

const connectDb = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log('Database Connected Successfully');
        console.log(uri);
    } catch (error) {
        console.log(error);
    }
}

export default connectDb;