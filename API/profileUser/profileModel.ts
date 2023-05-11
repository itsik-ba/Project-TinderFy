import mongoose, { Schema } from "mongoose";

export const profileSchema = new Schema({
      name: String,
      age: Number,
      gender: String,
      location: String,
      height: Number,
      weight: Number,
      kids: String || undefined,
      intrested: String,
      info: String,
    });

    const NewCard = mongoose.model("newProfile", profileSchema);


export default NewCard;