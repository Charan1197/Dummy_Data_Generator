import mongoose, { Schema } from "mongoose"

const dataGenSchema = new Schema({
    name:String,
    salary:Number,
    language:String,
    city:String,
    isManager:Boolean
})

export const dummyData = mongoose.model("DummyData", dataGenSchema)