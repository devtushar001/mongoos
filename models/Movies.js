import mongoose from "mongoose";


// Define Schema

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ratings: {
        type: Number, 
        required: true, 
        min: 1, 
        max: 7
    },
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: v => v >= 10,
    },
    genre: {
        type: Array,
    },
    isActive: {
        type: Boolean,
    },
    comments: [
        {
            value: {
                type: String,
            },

            published: {
                type: Date,
                default: Date.now
            }
        }
    ]

});

const movieModel = mongoose.model('Movie', movieSchema);
export default movieModel;