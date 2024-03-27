import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from "./routes/recipes.routes.js";

dotenv.config({ path: [".env.local"] });

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(express.static('uploads'));

//use routes
app.use("/recipes", routes);

//make mongoose databse connection
await mongoose.connect(process.env.MONGO_URI);

//define listening port
const port = process.env.PORT || 4000
app.listen(port, ()=>{
console.log(`Express app is running on port ${port}!`);
});