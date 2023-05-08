import mongoose, { Schema } from "mongoose";

export const prefferanceSchema = new Schema({
      fullname: String,
      age: Number,
    //   gender: {
    //     layout: 'checkbox'
    //   },
      country: String,
      height: Number,
      weight: Number,
      yourself: String,
    //   intrested:{
    //     layout: 'checkbox'
    //   },
  });

export default prefferanceSchema;