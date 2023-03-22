import  Express  from "express";
import productRouter from "./routes/product"
import mongoose from "mongoose";


const app = Express();

app.use(Express.json());



app.use("/api", productRouter);


mongoose.connect("mongodb://127.0.0.1:27017/thithu");
export const viteNodeApp=app;