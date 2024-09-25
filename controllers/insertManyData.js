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
            comments: [{ value: 'One of the best movie.' }, { value: 'I love too much this movie.' }]
        });
        
        const m2 = new movieModel({
            name: 'Avengers: Endgame',
            ratings: 5,
            money: 200000,
            genre: ['Action', 'Adventure', 'Sci-Fi'],
            isActive: true,
            comments: [{ value: 'An epic conclusion!' }, { value: 'Loved every minute of it.' }]
        });
        
        const m3 = new movieModel({
            name: 'The Batman',
            ratings: 4.5,
            money: 150000,
            genre: ['Action', 'Crime', 'Drama'],
            isActive: true,
            comments: [{ value: 'A dark and gritty take!' }, { value: 'Best Batman yet!' }]
        });
        
        const m4 = new movieModel({
            name: 'Toy Story 5',
            ratings: 4,
            money: 80000,
            genre: ['Animation', 'Adventure', 'Comedy'],
            isActive: true,
            comments: [{ value: 'Heartwarming and fun!' }, { value: 'Still a classic!' }]
        });
        
        const m5 = new movieModel({
            name: 'Jurassic World: Dominion',
            ratings: 3.5,
            money: 120000,
            genre: ['Action', 'Adventure', 'Sci-Fi'],
            isActive: true,
            comments: [{ value: 'Great action sequences!' }, { value: 'Nostalgic for the originals.' }]
        });
        
        const m6 = new movieModel({
            name: 'The Matrix Resurrections',
            ratings: 3.8,
            money: 90000,
            genre: ['Action', 'Sci-Fi'],
            isActive: true,
            comments: [{ value: 'A bold return!' }, { value: 'Mind-bending as always.' }]
        });
        
        const m7 = new movieModel({
            name: 'Finding Dory',
            ratings: 4.2,
            money: 70000,
            genre: ['Animation', 'Adventure', 'Comedy'],
            isActive: true,
            comments: [{ value: 'Touching and funny!' }, { value: 'Dory is adorable!' }]
        });
        
        const m8 = new movieModel({
            name: 'Black Panther: Wakanda Forever',
            ratings: 4.7,
            money: 180000,
            genre: ['Action', 'Adventure', 'Drama'],
            isActive: true,
            comments: [{ value: 'A powerful tribute!' }, { value: 'Incredible performances!' }]
        });
        
        const m9 = new movieModel({
            name: 'Frozen II',
            ratings: 4,
            money: 110000,
            genre: ['Animation', 'Adventure', 'Musical'],
            isActive: true,
            comments: [{ value: 'Catchy songs!' }, { value: 'Beautiful animation!' }]
        });
        
        const m10 = new movieModel({
            name: 'Guardians of the Galaxy Vol. 3',
            ratings: 4.5,
            money: 130000,
            genre: ['Action', 'Adventure', 'Comedy'],
            isActive: true,
            comments: [{ value: 'A fantastic ride!' }, { value: 'Loved the characters!' }]
        });
        
        const m11 = new movieModel({
            name: 'Wonder Woman 1984',
            ratings: 3.8,
            money: 95000,
            genre: ['Action', 'Adventure', 'Fantasy'],
            isActive: true,
            comments: [{ value: 'Gal Gadot shines!' }, { value: 'A bit uneven, but enjoyable.' }]
        });
        
        const m12 = new movieModel({
            name: 'Coco',
            ratings: 5,
            money: 120000,
            genre: ['Animation', 'Adventure', 'Fantasy'],
            isActive: true,
            comments: [{ value: 'Absolutely beautiful!' }, { value: 'Heartfelt and moving!' }]
        });
        
        const m13 = new movieModel({
            name: 'Shang-Chi and the Legend of the Ten Rings',
            ratings: 4.6,
            money: 140000,
            genre: ['Action', 'Adventure', 'Fantasy'],
            isActive: true,
            comments: [{ value: 'A fresh take on Marvel!' }, { value: 'Stunning visuals!' }]
        });
        
        const m14 = new movieModel({
            name: 'Zootopia',
            ratings: 4.5,
            money: 100000,
            genre: ['Animation', 'Adventure', 'Comedy'],
            isActive: true,
            comments: [{ value: 'Clever and entertaining!' }, { value: 'Loved the message!' }]
        });
        
        const m15 = new movieModel({
            name: 'Dune',
            ratings: 4.8,
            money: 160000,
            genre: ['Action', 'Adventure', 'Sci-Fi'],
            isActive: true,
            comments: [{ value: 'Visually stunning!' }, { value: 'Epic storytelling!' }]
        });
        
        const m16 = new movieModel({
            name: 'No Time to Die',
            ratings: 4.3,
            money: 150000,
            genre: ['Action', 'Adventure', 'Thriller'],
            isActive: true,
            comments: [{ value: 'A great Bond film!' }, { value: 'Action-packed!' }]
        });
        
        const m17 = new movieModel({
            name: 'Soul',
            ratings: 4.7,
            money: 70000,
            genre: ['Animation', 'Adventure', 'Drama'],
            isActive: true,
            comments: [{ value: 'Thought-provoking and emotional!' }, { value: 'Loved the jazz!' }]
        });
        
        const m18 = new movieModel({
            name: 'A Quiet Place Part II',
            ratings: 4.1,
            money: 90000,
            genre: ['Horror', 'Thriller'],
            isActive: true,
            comments: [{ value: 'Intense and gripping!' }, { value: 'A worthy sequel!' }]
        });
        
        const m19 = new movieModel({
            name: 'Luca',
            ratings: 4.4,
            money: 80000,
            genre: ['Animation', 'Adventure', 'Comedy'],
            isActive: true,
            comments: [{ value: 'Charming and delightful!' }, { value: 'A beautiful friendship story!' }]
        });
        
        const m20 = new movieModel({
            name: 'Maleficent: Mistress of Evil',
            ratings: 3.6,
            money: 85000,
            genre: ['Fantasy', 'Adventure', 'Family'],
            isActive: true,
            comments: [{ value: 'Visually stunning!' }, { value: 'Angelina Jolie shines!' }]
        });
        
        const m21 = new movieModel({
            name: 'Eternals',
            ratings: 3.9,
            money: 110000,
            genre: ['Action', 'Adventure', 'Fantasy'],
            isActive: true,
            comments: [{ value: 'Ambitious storytelling!' }, { value: 'Visually captivating!' }]
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

        const result = await movieModel.insertMany([m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, m19, m20, m21]);
        console.log(result);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

export  {createManyDoc};