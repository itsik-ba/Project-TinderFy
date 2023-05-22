import mongoose, { Schema } from "mongoose"



export const UserSchema = new Schema({
    // rigester
    name: { require: [true, "user must enter"], type: String },
    password: { require: true, type: String },
    email: { require: true, type: String, unique: true },

    // usercard
    role: {type:String, enum:["admin", "user"],default:"user"},
    // subscribed:{type:Boolean, default:false, select:false}

    age: {type:Number},
    gender: {type:String},
    location: {type:String},
    height: {type:Number},
    bodyType: {type:String},
    kids: {type:String},
    smoking: {type:String},
    education: {type:String,},
    job: {type:String},
    relationship: {type:String},
    info: {type:String,},
    religious: {type:String,}
})


const UserModel = mongoose.model("users", UserSchema);




export default UserModel; 