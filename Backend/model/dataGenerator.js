import mongoose, { Schema } from "mongoose"

const dataGenSchema = new Schema({
    name:String,
    salary:Number,
    Email:String,
    city:String,
    language: String,
    isManager:Boolean
})

export const DummyData = mongoose.model("DummyData", dataGenSchema)