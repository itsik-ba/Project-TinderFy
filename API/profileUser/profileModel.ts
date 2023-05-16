import mongoose, { Schema } from "mongoose";

export const profileSchema = new Schema({
      name: {require:true, type:String, unique:true},
      age: {require:true, type:Number, unique:true},
      gender: {require:true, type:String, unique:true},
      location: {require:true, type:String, unique:true},
      height: {require:true, type:Number, unique:true},
      weight: {require:true, type:Number, unique:true},
      kids: {require:true, type:String, unique:true},
      intrested: {require:true, type:String, unique:true},
      info: {require:true, type:String, unique:true},
    });

    const NewCard = mongoose.model("newProfile", profileSchema);


export default NewCard;