import mongoose, { Schema } from "mongoose";

export const prefferanceSchema = new Schema({
     height: {require:true, type:String, unique:true},
     bodyType: {require:true, type:String, unique:true},
     kids: {require:true, type:String, unique:true},
     smoking: {require:true, type:String, unique:true},
     hangout: {require:true, type:String, unique:true},
     education: {require:true, type:String, unique:true},
     job: {require:true, type:String, unique:true},
     relationship: {require:true, type:String, unique:true},
     politics: {require:true, type:String, unique:true},
     religious: {require:true, type:String, unique:true},
});


  const Prefferance = mongoose.model("prefferance", prefferanceSchema)


export default Prefferance;