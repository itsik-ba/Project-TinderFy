import mongoose, { Schema } from "mongoose"



export const UserSchema = new Schema ({
    // rigester
    name: {require:[true, "user must enter"], type:String}, 
    password: {require:true, type:String},
    email: {require:true, type:String},
       
    // usercard
    // role: {type:String, enum:["admin", "user"],default:"user"},
    // subscribed:{type:Boolean, default:false, select:false},

    // age: {require:true, type:Number,},
    // gender: {require:true, type:String,},
    // location: {require:true, type:String,},
    // height: {require:true, type:Number,},
    // bodyType: {require:true, type:String,},
    // kids: {require:true, type:String,},
    // smoking: {require:true, type:String,},
    // education: {require:true, type:String,},
    // job: {require:true, type:String,},
    // relationship: {require:true, type:String,},
    // info: {require:true, type:String,},
    // religious: {require:true, type:String,}
   })
       

const UserModel = mongoose.model("users", UserSchema);



export default UserModel; 