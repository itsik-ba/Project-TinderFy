import mongoose, { Schema } from "mongoose";

export const PrefferanceSchema = new Schema({
    userId: {index:true, type:String, unique:true},
    minHeight: {require:true, type:Number},
    maxHeight: {require:true, type:Number},
    minAge: {require:true, type:Number},
    maxAge: {require:true, type:Number},
    bodyType: {require:true, type:String},
    gender: {require:true, type:String},
    kids: {require:true, type:String},
    smoking: {require:true, type:String},
    education: {require:true, type:String},
    relationship: {require:true, type:String},
    religious: {require:true, type:String}
});


  const PrefferanceModel = mongoose.model("prefferances", PrefferanceSchema);


export default PrefferanceModel;