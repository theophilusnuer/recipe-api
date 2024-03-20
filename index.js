import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes/recipes.routes.js";

dotenv.config({ path: [".env.local"] });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(routes);


await mongoose.connect(process.env.MONGO_URI);

app.listen(6000, ()=>{
console.log('Express app is running ')
});