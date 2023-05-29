import mongoose, { Schema } from "mongoose";
import { UserSchema } from "../users/usersModel";

export interface Prefferance {
  userId: String,  
  minHeight:Number, 
    maxHeight:Number, 
     minAge:Number,
     maxAge:Number,
     bodyType:String,
     gender:String,
     kids:String,
     smoking:String,
     education:String,
     relationship:String,
     religious:String
}

export const PrefferanceSchema = new Schema({
    userId:{require:true, type:String},
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


  const PrefferanceModel = mongoose.model("prefferance", PrefferanceSchema)


export default PrefferanceModel;