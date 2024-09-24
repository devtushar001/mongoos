import movieModel from "../models/Movies.js";

const createManyDoc = async () => {
    try {
        // Creating new Document
        const m1 = new movieModel({
            name: 'Spider Man - 4',
            ratings: 4,
            money: 60000,
            genre: ['Action', 'Comedy'],
            isActive: true,
            comments: [{value: 'One of the best movie.'}, {value: 'I love too much this movie.'}]
        });

        const m2 = new movieModel({
            name: 'Pirates of carabian',
            ratings: 3,
            money: 78000,
            genre: ['Comedy', 'Action'],
            isActive: true,
            comments: [{value: 'I just watched all series'}, {value: 'Very funny movie'}]
        });

        const m3 = new movieModel({
            name: 'Thar -1',
            ratings: 6,
            money: 102000,
            genre: ['Mythology', 'Imaginary'],
            isActive: false,
            comments: [{value: 'Cool graphics'}, {value: 'Awesome scripts'}]
        });

        const m4 = new movieModel({
            name: 'Avenger',
            ratings: 7,
            money: 1002000,
            genre: ['Action', 'Comedy'],
            isActive: true,
            comments: [{value: 'Awesom addition'}, {value: 'One of the best collaboration'}]
        });

        const m5 = new movieModel({
            name: 'Titanic',
            ratings: 5,
            money: 104850,
            genre: ['Action', 'Adventure'],
            isActive: true,
            comments: [{value: 'Best Action Movie'}, {value: '....Amazing'}]
        });

        // const res1 = await m1.save();
        // const res2 = await m2.save();
        // const res3 = await m3.save();
        // const res4 = await m4.save();
        // const res5 = await m5.save();

        // console.log(res1);
        // console.log(res2);
        // console.log(res3);
        // console.log(res4);
        // console.log(res5);

        const result = await movieModel.insertMany([m1, m2, m3, m4, m5])
        console.log(result);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

export  {createManyDoc};