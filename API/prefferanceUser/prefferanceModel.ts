import mongoose, { Schema } from "mongoose";

export const prefferanceSchema = new Schema({
     userId:  {require:true, type:String},
     heightMax: {require:true, type:Number, },
     heightMin: {require:true, type:Number, },
     ageMax: {require:true, type:Number,},
     ageMin: {require:true, type:Number,},
     bodyType: {require:true, type:String,},
     gender: {require:true, type:String,},
     kids: {require:true, type:String,},
     smoking: {require:true, type:String,},
     education: {require:true, type:String,},
     job: {require:true, type:String,},
     relationship: {require:true, type:String,},
     religious: {require:true, type:String,},
});


  const Prefferance = mongoose.model("prefferance", prefferanceSchema)


export default Prefferance;