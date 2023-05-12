import mongoose, { Schema } from "mongoose";

export const prefferanceSchema = new Schema({
     height: String,
     bodyType: String,
     kids: String,
     smoking: String,
     hangout: String,
     education: String,
     job: String,
     relationship: String,
     politics: String,
     religious: String,
});


  const Prefferance = mongoose.model("prefferance", prefferanceSchema)


export default Prefferance;