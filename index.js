import express from "express";
import connectDb from "./db/connectDb.js";
// import { createManyDoc } from "./controllers/insertManyData.js";
// import {createDoc} from "./controllers/insertData.js";
// import movieModel from "./models/Movies.js";

const app = express();
const port = process.env.PORT || 8000;
const uri = process.env.DATABASE_URL || 'mongodb+srv://tmr908776:tmr908776@cluster0.rhor5.mongodb.net/';


connectDb(uri);
// movieModel()
// createDoc();
// createManyDoc();

app.listen(port, () => {
    console.log(`Server listening on PORT ${port}`);
})