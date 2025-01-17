import mongoose from "mongoose";
import 'dotenv/config';

const URI = process.env.URI;

mongoose
.connect(URI)
.then(() => console.log("DB is Up"))
.catch((err) => console.log(err));
