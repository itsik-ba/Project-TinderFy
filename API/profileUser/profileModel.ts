import mongoose, { Schema } from "mongoose";

export const profileSchema = new Schema({
      fullname: String,
      age: Number,
      gender: String,
      country: String,
      height: Number,
      weight: Number,
      yourself: String,
      textarea: String,
     intrested: String,
     
    });









export default profileSchema