import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
});

connectDb()
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`server is running at : ${process.env.PORT || 5000}`);
    })
})
.catch((error) => {
    console.error("Mongo db connection error", error);
})